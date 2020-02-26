<?php

/* 
 * Spektrix signup form
 */

namespace Drupal\spektrix_import\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;

/**
 * Configure example settings for this site.
 */
class SpektrixSignup extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
	return 'spektrix_signup';
  }
  
  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    
    $config = \Drupal::config('spektrix_import.settings');
	
	$form['#prefix'] = '<div class="grid no-banner m-spektrix-form-wrapper"><div class="col-sm-12"><h1>Join our mailing list</h1><p>Get updates on the best new events happening in Reading, straight to your inbox. </p> <p>Opt in to the What’s On Reading newsletter and you’ll get our pick of the week’s arts and cultural highlights. And let us know what kind of events you love the most and we’ll make sure you’re one of the first to hear when new shows are announced.</p>';
	$form['#suffix'] = '</div></div>';
	
	$form['FirstName'] = array(
	  '#type' => 'textfield',
	  '#title' => $this->t('First Name'),
	  '#required' =>  TRUE
	);

	$form['LastName'] = array(
	  '#type' => 'textfield',
	  '#title' => $this->t('Last Name'),
	  '#required' =>  TRUE
	);

	$form['Email'] = array(
	  '#type' => 'email',
	  '#title' => $this->t('Email'),
	  '#required' =>  TRUE
	);
	
	$current_page = Url::fromRoute('spektrix_import.spektrix_signup_result', [], ['absolute' => 'true'])->toString();
	
	$form['ReturnUrl'] = array(
	  '#type' => 'hidden',
	  '#value' => $current_page	  
	);
	
	$form['Submit'] = array(
	  '#type' => 'submit',
	  '#value' => $this->t('Signup'),	  
	);
	
	$form['#action'] = 'https://'. $config->get('spektrix_import_domain') .'/'. $config->get('spektrix_import_client') .'/website/secure/signup.aspx';
	
	return $form;
  }


  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
	parent::submitForm($form, $form_state);
  }
}


