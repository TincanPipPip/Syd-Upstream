<?php

namespace Drupal\spektrix_import\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Access\AccessResult;
use Drupal\node\Entity\Node;

/**
 * Controller for Add Performance single tab.
 */
class AddPerformanceController extends ControllerBase {

  /**
   * Checks to only display add performance links on production CT edit page.
   */
  public function checkAccess($node) {    
    $user = \Drupal::currentUser();
    $roles = $user->getAccount()->getRoles();
    
    $actualNode = Node::load($node);     
    
    // Only allow on event nodes
    if ($actualNode->bundle() != 'event') {
      return AccessResult::forbidden();
    }
    
    // Allow admin / super editor
    if (in_array('administrator', $roles) || in_array('super_editor', $roles) || $user->id() == 1) {
      return AccessResult::allowed();
    }
      
    // Allow partner if their own content
    if (in_array('partner', $roles)) {
      if ($actualNode->getOwner()->id() == $user->id()) {
        return AccessResult::allowed();
      }
    }
    	
	return AccessResult::forbidden();
  }

  /**
   * Create single performance - redirect to node add form, passing the production nid.
   */
  public function singleCreate($node) {
	return $this->redirect(
	  'eck.entity.add', 
	  ['eck_entity_type' => 'performances', 'eck_entity_bundle' => 'performance'], 
	  [
		'query' => ['edit[field_event][widget][0][target_id]=' => $node, 'destination' => '/node/' . $node .'/performances'],
		'absolute' => TRUE,
	  ]
	);
  }

}
