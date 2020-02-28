<?php

namespace Drupal\spektrix_import\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Access\AccessResult;
use Drupal\node\NodeInterface;

/**
 * Provides the performances list on an event edit page
 */
class PerformancesTab extends ControllerBase {

  /**
   * Checks to only display performance links on event CT edit page.
   */
  public function checkAccess(NodeInterface $node) {
	return AccessResult::allowedIf($node->getType() === 'event');
  }
  
  /**
   * Returns the performances list.
   *
   * @return array
   *   A render array with the view content.
   */
  public function content(NodeInterface $node) {
      	
	$content = views_embed_view('admin_event_perf', 'editor_perf', $node->id());

    return array (
      '#type' => 'markup',
      '#markup' => drupal_render($content),
      '#title' =>  $this->t('Performances')      
    );    
  }
}