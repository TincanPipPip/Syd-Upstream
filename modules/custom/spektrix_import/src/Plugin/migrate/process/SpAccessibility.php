<?php

namespace Drupal\spektrix_import\Plugin\migrate\process;

use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\migrate\Plugin\migrate\process\DefaultValue;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Calculates availability percentage based on capacity / seats available
 * 
 * @MigrateProcessPlugin(
 *   id = "spektrix_accessibility"
 * )
 */
class SpAccessibility extends DefaultValue implements ContainerFactoryPluginInterface {

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
            $configuration, $plugin_id, $plugin_definition
    );
  }

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    
    if (isset($value->EventAttribute)) {
      foreach ($value->EventAttribute as $key => $val) {
        if ($val->Value == '1') {
          $term = \Drupal::entityTypeManager()
                  ->getStorage('taxonomy_term')
                  ->loadByProperties(['name' => $val->Name]);
          if ($term) {
            $terms[] = array_pop($term)->id();
          } else { // Term not found, log error
            \Drupal::logger('migrate')->error('Term @term not found, cannot set accessibility on performance @id', array('@term' => (string)$val->Name, '@id' => $row->getSourceProperty('EventInstanceId')));
          }
        }
      }
    }
    
    // Return terms
    if ($terms) {
      $value = $terms;
      return $value;
    }
  }
}
