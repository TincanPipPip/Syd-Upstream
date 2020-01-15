<?php

use Drupal\contact\Entity\ContactForm;
use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_FORM_ID_alter() for install_configure_form().
 *
 * Allows the profile to alter the site configuration form.
 */
function syd_profile_form_install_configure_form_alter(&$form, FormStateInterface $form_state) {
  // Pre-populate the site name and email address.
  $form['site_information']['site_name']['#default_value'] = $_SERVER['SERVER_NAME'];
  $form['site_information']['site_mail']['#default_value'] = 'dp_admin@tincan.co.uk';

  // Account information defaults
  $form['admin_account']['account']['name']['#default_value'] = 'dp_admin';
  $form['admin_account']['account']['mail']['#default_value'] = 'dp_admin@tincan.co.uk';

  // Date/time settings
  $form['regional_settings']['site_default_country']['#default_value'] = 'GB';
  $form['regional_settings']['date_default_timezone']['#default_value'] = 'Europe/London';

  // Unset the timezone detect stuff
  unset($form['server_settings']['date_default_timezone']['#attributes']['class']);

  // Only check for updates, no need for email notifications
  $form['update_notifications']['update_status_module']['#default_value'] = array(0);
}
