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
 *   id = "availability_percentage"
 * )
 */
class SpAvailabilityPercentage extends DefaultValue implements ContainerFactoryPluginInterface {

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
      return new static(
          $configuration, 
          $plugin_id, 
          $plugin_definition			
      );
  }

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {

    if ($value != '0') { // $value = SeatsAvailable
      $capacity = $row->getSourceProperty('Capacity');
      $locked = $row->getSourceProperty('SeatsLocked');      
      return round(($value / ($capacity - $locked)) * 100, 1);
    }
    else {
      return '0';
    }
  }
}
