<?php

/*
 * @file
 *
 * Provides a form for adding a single new performance to an event page.
 *
 */

namespace Drupal\spektrix_import\Form;

use Drupal\Core\Form\ConfirmFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Symfony\Component\HttpFoundation\RedirectResponse;

class AddPerformanceForm extends ConfirmFormBase {

  /**
   * Specify the form ID.
   */
  public function getFormId() {
	return 'add_performance_form';
  }

  /**
   * Build the actual form.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
// Still at pre-confirmation, so build the main form
	$operations = array(0 => t('Generate daily performances'), 1 => t('Delete existing performances'));

	$form['#tree'] = TRUE;

	if (!($form_state->getStorage('confirm'))) {

	  $form['operation'] = array(
		'#title' => t('Operation'),
		'#description' => t('The delete option is useful if you generate any performances by mistake.'),
		'#type' => 'radios',
		'#default_value' => 0,
		'#options' => $operations,
	  );

	  $form['start'] = array(
		'#title' => t('Start date'),
		'#type' => 'datetime',
		'#date_format' => 'j F Y', // Uses the PHP date() format - http://php.net/manual/en/function.date.php
		'#date_year_range' => '0:+3',
		'#date_label_position' => 'within',
		'#required' => TRUE,
	  );

	  $form['end'] = array(
		'#title' => t('End date'),
		'#type' => 'datetime',
		'#date_format' => 'j F Y',
		'#date_year_range' => '0:+3',
		'#date_label_position' => 'within',
		'#required' => TRUE,
	  );

	  $form['days'] = array(
		'#type' => 'fieldset',
		'#title' => t('Days of week'),
		'#description' => t('The time for new repeat performances must be in HH:MM format (e.g. 20:30)'),
		'#collapsible' => FALSE,
		'#collapsed' => FALSE,
		'#states' => array(
		  'visible' => array(
			':input[name="operation"]' => array('value' => 0),
		  ),
		  'required' => array(
			':input[name="operation"]' => array('value' => 0),
		  ),
		),
	  );

	  $form['days']['day1'] = array(
		'#title' => t('Mondays'),
		'#type' => 'checkbox',
		'#default_value' => 1,
	  );

	  $form['days']['time1'] = array(
		'#title' => t('Time'),
		'#type' => 'textfield',
		'#maxlength' => 5,
		'#size' => 5,
		'#default_value' => '20:00',
	  );

	  $form['days']['day2'] = array(
		'#title' => t('Tuesdays'),
		'#type' => 'checkbox',
		'#default_value' => 1,
	  );

	  $form['days']['time2'] = array(
		'#title' => t('Time'),
		'#type' => 'textfield',
		'#maxlength' => 5,
		'#size' => 5,
		'#default_value' => '20:00',
	  );

	  $form['days']['day3'] = array(
		'#title' => t('Wednesdays'),
		'#type' => 'checkbox',
		'#default_value' => 1,
	  );

	  $form['days']['time3'] = array(
		'#title' => t('Time'),
		'#type' => 'textfield',
		'#maxlength' => 5,
		'#size' => 5,
		'#default_value' => '20:00',
	  );

	  $form['days']['day4'] = array(
		'#title' => t('Thursdays'),
		'#type' => 'checkbox',
		'#default_value' => 1,
	  );

	  $form['days']['time4'] = array(
		'#title' => t('Time'),
		'#type' => 'textfield',
		'#maxlength' => 5,
		'#size' => 5,
		'#default_value' => '20:00',
	  );

	  $form['days']['day5'] = array(
		'#title' => t('Fridays'),
		'#type' => 'checkbox',
		'#default_value' => 1,
	  );

	  $form['days']['time5'] = array(
		'#title' => t('Time'),
		'#type' => 'textfield',
		'#maxlength' => 5,
		'#size' => 5,
		'#default_value' => '20:00',
	  );

	  $form['days']['day6'] = array(
		'#title' => t('Saturdays'),
		'#type' => 'checkbox',
		'#default_value' => 1,
	  );

	  $form['days']['time6'] = array(
		'#title' => t('Time'),
		'#type' => 'textfield',
		'#maxlength' => 5,
		'#size' => 5,
		'#default_value' => '20:00',
	  );

	  $form['days']['day7'] = array(
		'#title' => t('Sundays'),
		'#type' => 'checkbox',
		'#default_value' => 1,
	  );

	  $form['days']['time7'] = array(
		'#title' => t('Time'),
		'#type' => 'textfield',
		'#maxlength' => 5,
		'#size' => 5,
		'#default_value' => '20:00',
	  );
      
      $form['booking_label'] = array(
        '#title'  =>  t('Booking label'),
        '#description'  =>  t('Text which will appear on the performance\'s booking button, eg. Book Now'),
        '#type' =>  'textfield',
        '#states' => array(
		  'visible' => array(
			':input[name="operation"]' => array('value' => 0),
		  ),  
        )
      );
      
      $form['booking_url'] = array(
        '#title'  =>  t('Booking link'),
        '#description'  =>  t('Enter the url for the page/site where users can book/RSVP or a mailto: email link'),
        '#type' =>  'textfield',
        '#states' => array(
		  'visible' => array(
			':input[name="operation"]' => array('value' => 0),
		  ),  
        )
      );

	  $form['submit'] = array(
		'#type' => 'submit',
		'#value' => t('Submit')
	  );
	} else {
	  // The form to show at confirmation stage
	  if ($form_state->getValue('operation') == 0) {

		$content = '<p>This will create daily performances for this event, between ' . $form_state->getValue('start') . ' and ' . $form_state->getValue('end') . ' at ' . $form_state->getValue('time') . ' every day.</p>';
	  } else {
		$content = '<p>This will delete performances for this event, between ' . $form_state->getValue('start') . ' and ' . $form_state->getValue('end') . '</p>';
	  }
	  $form['intro'] = array('#markup' => $content);

	  // create the confirm form:
	  return parent::buildForm($form, $form_state);
	}

	return $form;
  }

  public function validateForm(array &$form, FormStateInterface $form_state) {
	parent::validateForm($form, $form_state);
	if (!$form_state->getStorage('confirm')) {
	  // Check for proper date formatting
	  if (!$this->add_performance_validatedate($form_state->getValue('start'), 'Y-m-d H:i:s')) {
		  $form_state->setErrorByName('start', t('Must be a valid date in format YYYY-MM-DD H:i:s'));
	  }
	  if (!$this->add_performance_validatedate($form_state->getValue('end'), 'Y-m-d H:i:s')) {
		  $form_state->setErrorByName('end', t('Must be a valid date in format YYYY-MM-DD H:i:s'));
	  }
	  // Check that start is earlier than end date
	  if (!$this->add_performance_comparedate($form_state->getValue('start'), $form_state->getValue('end'))) {
		  $form_state->setErrorByName('start', t('Start date must be at least one day before end date'));
	  }
	  // Validation only needed for generating, not deleting
	  //if ($form_state['values']['operation'] == 0) {
	  //  if (!add_performance_validatedate($form_state['values']['time'], 'H:i')) {
	  //  form_set_error('time', t('Must be a valid time in format HH:MM'));
	  //  }
	  //}
	}
  }

  /**
  * Helper function to validate a date
  */
  private function add_performance_validatedate($date, $format = 'Y-m-d H:i:s') {	
	if ($date->format($format)) {	  
	  return TRUE;
	} else {
	  return FALSE;
	}
  }

  /**
   * Helper function to validate a date
   */
  private function add_performance_comparedate($start, $end) {
	if ($this->add_performance_validatedate($start, 'Y-m-d H:i:s') && $this->add_performance_validatedate($end, 'Y-m-d H:i:s')) {
	  $startdate = new \DateTime($start);
	  $enddate = new \DateTime($end);
	  return $startdate < $enddate;
	} else {
	  return FALSE;
	}
  }

  /**
   * Submit handler - sets session data or performs operation
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

	if (!$form_state->getStorage('confirm')) {
	  // not confirmed yet.
	  $_SESSION['ap_start'] = $form_state->getValue('start'); // add our field into a session variable to keep it around for later
	  $_SESSION['ap_end'] = $form_state->getValue('end');
      $_SESSION['booking_label'] = $form_state->getValue('booking_label') ? $form_state->getValue('booking_label') : '';
      $_SESSION['booking_url'] = $form_state->getValue('booking_url') ? $form_state->getValue('booking_url') : '';

	  // we need to build an array of days and their respective times
	  $days = array();
	  for ($day = 1; $day <= 7; $day++) {
		$days[$day] = array($form_state->getValue('days')['day' . $day], $form_state->getValue('days')['time' . $day]);
	  }

	  $_SESSION['ap_days'] = $days;
	  $_SESSION['ap_operation'] = $form_state->getValue('operation');

	  $form_state->setStorage(['confirm' => TRUE]); // this will cause the form to be rebuilt, entering the confirm part of the form
	  $form_state->setRebuild();
	} else {
	  // Confirmed: processing of the form happens here:
	  $start = $_SESSION['ap_start'];
	  $end = $_SESSION['ap_end'];
	  $operation = $_SESSION['ap_operation'];
	  $daycheck = $_SESSION['ap_days'];
	  $event_nid = \Drupal::routeMatch()->getParameter('node');
      $booking_label =  $_SESSION['booking_label'];
      $booking_url =  $_SESSION['booking_url'];

	  if ($operation == 0) {
		// Process node generation
		$this->addPerformanceGenerate($start, $end, $event_nid, $daycheck, $booking_label, $booking_url);
	  } else {
		// Process node deletion
		$this->addPerformanceDelete($start, $end, $event_nid);
	  }

	  return new RedirectResponse('node/' . $event_nid);
	}
  }

  public function getCancelUrl() {
	return new Url('<current>');
  }

  public function getQuestion() {

  }

  /**
   * Generates performances
   *
   * @param DateTime $start
   * @param DateTime $end
   * @param int $event_nid
   * @param array $daycheck
   * @param string $booking_label
   * @param string $booking_url
   */
  private function addPerformanceGenerate($start, $end, $event_nid, $daycheck, $booking_label = NULL, $booking_url = NULL) {

	$startdate = new \DateTime($start->format('Y-m-d\TH:i:s'), new \DateTimeZone('Europe/London'));
	$enddate = new \DateTime($end->format('Y-m-d\TH:i:s'), new \DateTimeZone('Europe/London'));
	$author_uid = \Drupal::currentUser()->id();
	$generate_count = 0;

	while ($startdate <= $enddate) {

	  // use $daycheck to add the correct time to the date
	  $dow = $startdate->format('w');
	  // change Sunday 0 to 7
	  if ($dow == 0) {
		$dow = 7;
	  }

	  // now look up dow in $daycheck
	  if ($daycheck[$dow][0] == 1) {
		$time = $daycheck[$dow][1];
		$fulldate = clone $startdate;
		$fulldate->modify($time);
		$this->addPerformanceCreate($fulldate, $author_uid, $event_nid, $booking_label, $booking_url);
		$generate_count++;
	  }
	  // TODO: might need to reset the time here
	  $startdate->modify('+1 day');
	}
	drupal_set_message(t(':count performances have been created.', array(':count' => $generate_count)));
  }

  /**
   *
   * Creates a performance
   *
   * @param DateTime $fulldate
   * @param int $author_uid
   * @param int $event_nid
   * @param string $booking_label
   * @param string $booking_url
   */
  private function addPerformanceCreate($fulldate, $author_uid, $event_nid, $booking_label = NULL, $booking_url = NULL) {
   
	// Convert date to UTC to get around D8 UTC -> timezone conversion
	$date = new \DateTime($fulldate->format('Y-m-d H:i:s e'));
	$date->setTimezone(new \DateTimeZone('UTC'));

	// Load entity manager & set field data
	$entity_type_mgr = \Drupal::getContainer()->get('entity_type.manager');
	$data = [
	  'type' => 'performance',
	  'title' => 'Generated performance event:' . $event_nid . ' date:' . date_format($fulldate, 'Y-m-d H:i'),
	  'field_perf_date' => [
		'value' => $date->format('Y-m-d\TH:i:s'),
	  ],
	  'field_event' => [
		'target_id' => $event_nid
	  ],
      'field_availability_override' => [
        'value' => $booking_label
      ],
      'field_perf_booking_link' => [
        'uri' => $booking_url
      ],
	  'uid' => $author_uid
	];
    
	// Save entity
	$entity_type_mgr->getStorage('performances')->create($data)->save();
  }

  /**
   * Deletes performances in a given date range
   *
   * @param DateTime $start
   * @param DateTime $end
   * @param int $event_nid
   */
  private function addPerformanceDelete($start, $end, $event_nid) {

	$startdate = new \DateTime(format_date(strtotime($start), 'custom', 'Y-m-d'));
	$enddate = new \DateTime(format_date(strtotime($end), 'custom', 'Y-m-d'));	
	// Query for performances for this event, in date range
	$query = \Drupal::entityQuery('performances');
	$query->condition('type', 'performance');
	$query->condition('field_event.target_id', $event_nid, '=');
	$query->condition('field_perf_date.value', [$startdate->format(DATETIME_DATETIME_STORAGE_FORMAT), $enddate->format(DATETIME_DATETIME_STORAGE_FORMAT)], 'BETWEEN');

	$entity_ids = $query->execute();

	// Check there are results
	if ($entity_ids) {
	  $delete_count = 0;
	  foreach ($entity_ids as $id) {
		$controller = \Drupal::entityManager()->getStorage('performances');
		$entities = $controller->loadMultiple([$id]);
		$controller->delete($entities);
		$delete_count++;
	  }
	  drupal_set_message(t(':count performances have been deleted.', array(':count' => $delete_count)));
	} else {
	  drupal_set_message(t('There are no matching performances in this date range!'), 'status');
	}
  }
}
