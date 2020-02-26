<?php

namespace Drupal\spektrix_import\Plugin\migrate\source;

use Drupal\migrate_plus\Plugin\migrate\source\Url;
use Drupal\migrate\Row;
use Drupal\taxonomy\Entity\Term;
use Drupal\migrate\Plugin\MigrationInterface;

/**
 * Source plugin for events.
 *
 * @MigrateSource(
 *   id = "spektrix_event"
 * )
 */
class SpektrixEvent extends Url {

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

    $this->sourceUrls = $configuration['urls'];
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
	  'event_id' => [
		'type' => 'integer',
		'alias' => 'p',
	  ],
	];
  }

  /**
   * {@inheritdoc}
   */
  public function prepareRow(Row $row) {
	
	// Try and grab genre, venue and price
	if ($attrs = json_decode(json_encode($row->getSourceProperty('Attributes')))) {
      
      if (!empty($attrs) && isset($attrs->EventAttribute)) {
        
        foreach ($attrs->EventAttribute as $attr) {
         
          if (!empty($attr->Value)) {
            // Check 'exclude' flag
            if ($attr->Name == 'Exclude from Website') {			  
              if ($attr->Value == 1) {
                return FALSE;
              }
            }
            // Set appropriate source field value            
            switch ($attr->Name) {
              case "Price":
                $row->setSourceProperty('price', $attr->Value);
                break;

              case "Genre": // Parent term needs to be mapped

//                // Try and load matching taxonomy term first
//                $term = \Drupal::entityTypeManager()
//                    ->getStorage('taxonomy_term')
//                    ->loadByProperties(['name' => $attr->Value]);			  
//                if ($term) { // Only set if term found
//                  $term = array_pop($term);				  
//                  // Try and load parent tid
//                  $parent = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadParents($term->id());
//                  if ($parent) {
//                    $parent = reset($parent);
//                    $tid = $parent->id();
//                  }
//                  else { // No parent, return term ID
//                    $tid = $term->id();
//                  }				  
//                  $row->setSourceProperty('genre', $tid);				  
//                }			
                break;

              case "Venue":
              case "Location": 
                if (!empty($attr->Value) && is_string($attr->Value)) {                  
                  // Try and load matching venue node
                  $nodes = \Drupal::entityTypeManager()
                    ->getStorage('node')
                    ->loadByProperties(['title' => $attr->Value]);

                  if ($node = reset($nodes)) {
                    $row->setSourceProperty('venue', $node);
                  }                  
                }
                else {
                  var_dump($attr);
                }
                break;
            }
          }          
        }        
	  }
	}
	return parent::prepareRow($row);
  }

}
