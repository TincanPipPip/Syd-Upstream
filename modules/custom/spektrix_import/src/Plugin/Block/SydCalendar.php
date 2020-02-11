<?php

namespace Drupal\spektrix_import\Plugin\Block;

use \Drupal\Core\Block\BlockBase;

/**
 * Provides an extended Menu block.
 *
 * @Block(
 *   id = "syd_calendar_block",
 *   admin_label = @Translation("Syd Calendar"),
 *   category = @Translation("Custom")  
 * )
 */
class SydCalendar extends BlockBase {
  
  /**
   * {@inheritdoc}
   */
  public function build() {
		
    return array(
      '#theme' => 'spektrix_import_calendar',      
      '#attached' => array(
        'library' =>  array(
          'spektrix_import/ui-calendar'
        ),
      ),
    );		
  }
}