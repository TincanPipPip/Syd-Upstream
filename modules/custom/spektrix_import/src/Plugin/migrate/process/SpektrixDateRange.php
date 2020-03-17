<?php

namespace Drupal\spektrix_import\Plugin\migrate\process;

use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\migrate\Plugin\migrate\process\DefaultValue;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Merges 2 date fields into a single date range field
 * 
 * @MigrateProcessPlugin(
 *   id = "spektrix_date_range"
 * )
 */
class SpektrixDateRange extends DefaultValue implements ContainerFactoryPluginInterface {

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
      
	  if ($value[0] && is_numeric(strtotime($value[0]))) {
		// Transform to start - end date
		$value = array(
			'value'	=>		format_date(strtotime($value[0]), 'custom', 'Y-m-d\TH:i:s', 'UTC'),
			'end_value'	=>		format_date(strtotime($value[1]), 'custom', 'Y-m-d\TH:i:s', 'UTC'),
		);
	  }
		
	  return $value;
	}

}
