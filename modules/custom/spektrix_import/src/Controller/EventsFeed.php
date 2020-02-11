<?php

/* 
 * Provides a controller that returns a view's results in JSON
 */

namespace Drupal\spektrix_import\Controller;

use Drupal\views\Views;
use Drupal\Core\Url;
use Symfony\Component\HttpFoundation\Response;

class EventsFeed extends Response {
	
	public function Feed() {
		$response = new Response();
		
		// Fetch view result
		$view_result = Views::getView('whats_on')->render('block_1')['#view']->result;
		
		// Build array of results
		foreach ($view_result as $key => $result) {			
			$title = $result->_entity->get('title')->getValue()[0]['value'];
			$start = \Drupal::service('date.formatter')->format(strtotime($result->_entity->get('field_perf_date')->getValue()[0]['value']), 'custom', 'Y-m-d');			
			$return[] = array(
			  'title'	=>	$title,
			  'date'	=>	$start			  
			);		
		}
		// Encode response in JSON and return
		$response->setContent(json_encode($return));
		$response->headers->set('Content-Type', 'application/json');
		return $response;
	}
}