<?php

namespace Drupal\spektrix_import\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Response;

/**
 * Provides the performances modal (book now link)
 */
class CalendarPerformances extends ControllerBase {

  /**
   * Returns the performances modal (book now link).
   *
   * @return array
   *   A render array with the view content.
   */
  public function modalContent($date) {
      
	$response = new Response();
	
	$content = views_embed_view('whats_on', 'block_2', $date);

	// Encode response in JSON and return
	$response->setContent(json_encode(\Drupal::service('renderer')->renderPlain($content)));
	$response->headers->set('Content-Type', 'application/json');
	return $response;	       
  }
}