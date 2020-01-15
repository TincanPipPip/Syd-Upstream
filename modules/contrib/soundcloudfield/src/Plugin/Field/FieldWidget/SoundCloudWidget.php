<?php

/**
 * @file
 * Contains \Drupal\soundcloudfield\Plugin\Field\FieldWidget\SoundCloudWidget.
 */

namespace Drupal\soundcloudfield\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FieldItemInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'soundcloud_url' widget.
 *
 * @FieldWidget(
 *   id = "soundcloud_url",
 *   module = "soundcloudfield",
 *   label = @Translation("SoundCloud URL"),
 *   field_types = {
 *     "soundcloud"
 *   }
 * )
 */
class SoundCloudWidget extends WidgetBase {

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    // todo: investigate
    $settings = parent::defaultSettings();

    return array(
      'url' => '',
      'placeholder_url' => '',
    ) + parent::defaultSettings();
  }

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $item = $items[$delta];

    // Build the element render array.
    $element['url'] = array(
      '#type' => 'url', // investigate, other types? (textfield)
      '#title' => t('SoundCloud URL'),
      '#placeholder' => $this->getSetting('placeholder_url'), // investigate
      '#default_value' => isset($item->url) ? $item->url : NULL,
      '#element_validate' => array(array(get_called_class(), 'validateSoundCloudUriElement')),
      '#maxlength' => 2048,
      '#required' => $element['#required'],
    );

    if ($this->fieldDefinition->getFieldStorageDefinition()->getCardinality() == 1) {
      $element += array(
        '#type' => 'fieldset',
      );
    }

    return $element;
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = parent::settingsForm($form, $form_state);

    $elements['placeholder_url'] = array(
      '#type' => 'textfield',
      '#title' => t('Placeholder for URL'),
      '#default_value' => $this->getSetting('placeholder_url'),
      '#description' => t('Text that will be shown inside the field until a value is entered. This hint is usually a sample value or a brief description of the expected format.'),
    );

    return $elements;
  }

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary = array();

    $placeholder_url = $this->getSetting('placeholder_url');
    if (empty($placeholder_url)) {
      $summary[] = t('No placeholders');
    }
    else {
      if (!empty($placeholder_url)) {
        $summary[] = t('URL placeholder: @placeholder_url', array('@placeholder_url' => $placeholder_url));
      }
    }

    return $summary;
  }

  /**
   * Form element validation handler for ...().
   */
  function validateSoundCloudUriElement(&$element, FormStateInterface $form_state, $form) {
    $input = $element['#value'];

  }

}