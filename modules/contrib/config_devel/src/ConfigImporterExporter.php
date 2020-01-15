<?php

namespace Drupal\config_devel;

use Drupal\Component\Utility\Crypt;
use Drupal\config_devel\Event\ConfigDevelEvents;
use Drupal\config_devel\Event\ConfigDevelSaveEvent;
use Drupal\Core\Config\Config;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Config\ConfigManagerInterface;
use Drupal\Core\Config\Entity\ConfigEntityStorageInterface;
use Drupal\Core\Config\FileStorage;
use Drupal\Core\Config\InstallStorage;
use Symfony\Component\EventDispatcher\Event;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Yaml\Exception\DumpException;
use Drupal\Core\Config\ConfigCrudEvent;
use Drupal\Core\Config\ConfigRenameEvent;
use Drupal\Core\Config\ConfigEvents;

/**
 * Imports and exports config.
 */
class ConfigImporterExporter {

  /**
   * The configuration factory.
   *
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $configFactory;

  /**
   * The configuration manager.
   *
   * @var \Drupal\Core\Config\ConfigManagerInterface
   */
  protected $configManager;

  /**
   * The event dispatcher.
   *
   * @var \Symfony\Component\EventDispatcher\EventDispatcherInterface
   */
  protected $eventDispatcher;

  /**
   * Constructs the ConfigImporterExporter service.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The configuration factory.
   * @param \Drupal\Core\Config\ConfigManagerInterface $config_manager
   *   The configuration manager.
   * @param \Symfony\Component\EventDispatcher\EventDispatcherInterface $event_dispatcher
   *   The event dispatcher.
   */
  public function __construct(
    ConfigFactoryInterface $config_factory,
    ConfigManagerInterface $config_manager,
    EventDispatcherInterface $event_dispatcher
  ) {
    $this->configFactory = $config_factory;
    $this->configManager = $config_manager;
    $this->eventDispatcher = $event_dispatcher;
  }

  /**
   * Imports a config item from the given filename.
   *
   * @param string $filename
   *   The filename to import from with the Drupal-relative path.
   * @param string $original_hash
   *   (optional) The original hash. TODO: document this properly!
   * @param string $contents
   *   (optional) The file contents. The file will be read if omitted.
   *
   * @return string|null
   *   The new hash of the config, or NULL if there was no need to import
   *   because the config hash was identical.
   */
  public function importConfig($filename, $original_hash = '', $contents = '') {
    $hash = '';
    if (!$contents && (!$contents = @file_get_contents($filename))) {
      return $hash;
    }
    $needs_import = TRUE;
    $hash = Crypt::hashBase64($contents);
    if ($original_hash) {
      if ($hash == $original_hash) {
        $needs_import = FALSE;
      }
    }
    if ($needs_import) {
      $data = (new InstallStorage())->decode($contents);
      $config_name = basename($filename, '.yml');
      $entity_type_id = $this->configManager->getEntityTypeIdByName($config_name);
      if ($entity_type_id) {
        $entity_storage = $this->getStorage($entity_type_id);
        $entity_id = $this->getEntityId($entity_storage, $config_name);
        $entity_type = $entity_storage->getEntityType();
        $id_key = $entity_type->getKey('id');
        $data[$id_key] = $entity_id;
        /** @var \Drupal\Core\Config\Entity\ConfigEntityInterface $entity */
        $entity = $entity_storage->create($data);
        if ($existing_entity = $entity_storage->load($entity_id)) {
          $entity
            ->set('uuid', $existing_entity->uuid())
            ->enforceIsNew(FALSE);
        }
        $entity_storage->save($entity);
      }
      else {
        $this->configFactory->getEditable($config_name)->setData($data)->save();
      }

      return $hash;
    }
  }

  /**
   * Write a configuration item to files.
   *
   * @param \Drupal\Core\Config\Config $config
   *   The config object.
   * @param array $file_names
   *   The file names to which the configuration should be written.
   *
   * @return string[]
   *   An array of the filenames that were written.
   */
  public function writeBackConfig(Config $config, array $file_names) {
    $written_files = [];

    if ($file_names) {
      $data = $config->get();
      $config_name = $config->getName();
      unset($data['_core']);
      if ($entity_type_id = $this->configManager->getEntityTypeIdByName($config_name)) {
        unset($data['uuid']);
      }

      // Let everyone else have a change to update the exported data.
      $event = new ConfigDevelSaveEvent($file_names, $data);
      $this->eventDispatcher->dispatch(ConfigDevelEvents::SAVE, $event);
      $data = $event->getData();
      $file_names = $event->getFileNames();

      foreach ($file_names as $file_name) {
        try {
          $result = file_put_contents($file_name, (new InstallStorage())->encode($data));

          if ($result !== FALSE) {
            $written_files[] = $file_name;
          }
        }
        catch (DumpException $e) {
          // Do nothing. What could we do?
        }
      }
    }

    return $written_files;
  }

  /**
   * @param string $entity_type_id
   *
   * @return \Drupal\Core\Config\Entity\ConfigEntityStorageInterface
   */
  protected function getStorage($entity_type_id) {
    return $this->configManager->getEntityManager()->getStorage($entity_type_id);
  }

  /**
   * @param \Drupal\Core\Config\Entity\ConfigEntityStorageInterface $entity_storage
   * @param string $config_name
   *
   * @return string
   */
  protected function getEntityId(ConfigEntityStorageInterface $entity_storage, $config_name) {
    // getIDFromConfigName adds a dot but getConfigPrefix has a dot already.
    return $entity_storage::getIDFromConfigName($config_name, $entity_storage->getEntityType()->getConfigPrefix());
  }

  /**
   * @return \Drupal\Core\Config\Config
   */
  protected function getSettings() {
    return $this->configFactory->get('config_devel.settings');
  }

}
