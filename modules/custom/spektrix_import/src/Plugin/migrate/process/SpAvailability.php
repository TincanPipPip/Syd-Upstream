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
 *   id = "spektrix_availability"
 * )
 */
class SpAvailability extends DefaultValue implements ContainerFactoryPluginInterface {

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
    
    $properties = [];
    $properties['vid'] = 'availability';
    
    $capacity = $row->getSourceProperty('Capacity');
    $locked = $row->getSourceProperty('SeatsLocked') + pow(1, -7);
    $percentage = round(($value / ($capacity - $locked)) * 100, 1);
    
    if ($value == 0) {
      $properties['name'] = 'Sold Out';
    }
    else if ($percentage !=0 && $percentage < 10) {
      $properties['name'] = 'Selling Fast';
    }
    else if ($percentage >= 10) {
      $properties['name'] = 'Book Now';
    }
    
    $terms = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadByProperties($properties);
    $term = reset($terms);
    
    if (!empty($term)) {
      return $term->id();
    }    
  }
}
