<?php

namespace Drupal\spektrix_import\Plugin\migrate\source;

use Drupal\migrate_plus\Plugin\migrate\source\Url;
use Drupal\migrate\Row;
use Drupal\migrate\Plugin\MigrationInterface;

/**
 * Source plugin for performances.
 *
 * @MigrateSource(
 *   id = "spektrix_performance"
 * )
 */
class SpektrixPerformance extends Url {

  /**
   * The source URLs to retrieve.
   *
   * @var array
   */
  protected $sourceUrls = [];

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, MigrationInterface $migration) {

    // Override URL with endpoint set in config form
    $config = \Drupal::service('config.factory')->get('spektrix_import.settings');
    $domain = $config->get('spektrix_import_domain');
    $user = $config->get('spektrix_import_client');    
    $endpoint = 'https://'. $domain .'/' . $user . '/api/v1/eventsrestful.svc/allattributes/from?date='. format_date(time(), 'custom', 'Y-m-d\TH:i:s');
    $configuration['urls'] = $endpoint;

    if (!is_array($configuration['urls'])) {
      $configuration['urls'] = [$configuration['urls']];
    }
    parent::__construct($configuration, $plugin_id, $plugin_definition, $migration);

//    $this->sourceUrls = $configuration['urls'];
  }

  /**
   * {@inheritdoc}
   */
  public function fields() {
    $fields = [];
    foreach ($this->fields as $field_info) {
      $fields[$field_info['name']] = isset($field_info['label']) ? $field_info['label'] : $field_info['name'];
    }
    return $fields;
  }

  /**
   * {@inheritdoc}
   */
  public function getIds() {
    return [
        'EventInstanceId' => [
            'type' => 'integer',
            'alias' => 'p',
        ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function prepareRow(Row $row) {

    // Set onsale flag to bool
    $on_sale = $row->getSourceProperty('OnSaleOnWeb');
    if ($on_sale == 'true') {
      $row->setSourceProperty('OnSaleOnWeb', (bool) 1);
    }

    // Check 'exclude' flag	
//	if ($attrs = $row->getSourceProperty('Attributes')) {
//	  if (isset($attrs->EventAttribute)) {
//		foreach ($attrs->EventAttribute as $key => $val) {
//		  if ((string)$val->Name == 'Exclude from Website') {
//			if ((string)$val->Value == "1") {
//			  return FALSE;
//			}
//		  }
//		}
//	  }
//	}
    $attrs = $row->getSourceProperty('Attributes');
    if ($attrs->Name == 'Doors Open Time') {
      $row->setSourceProperty('doTime', $attrs->Value);
    }
    parent::prepareRow($row);
  }

}
