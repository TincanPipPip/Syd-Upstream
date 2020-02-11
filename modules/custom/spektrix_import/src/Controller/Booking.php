<?php

/*
 * Provides a controller that returns a booking iFrame
 */

namespace Drupal\spektrix_import\Controller;

use Drupal\Core\Controller\ControllerBase;

class Booking extends ControllerBase {

  /**
   * Spektrix client name
   */
  private $spektrix_user;

  /**
   * Spektrix domain
   */
  private $spektrix_domain;

  public function Iframe($perf_id) {
    return [
      '#type' => 'html_tag',
      '#tag' => 'iframe',
      '#attributes' => [
          'style' => 'width:100%;',
          'src' => 'https://'. $this->spektrix_domain .'/'. $this->spektrix_user .'/website/ChooseSeats.aspx?resize=true&EventInstanceId='. $perf_id,
          'frameborder' => 0,
          'onload' => 'setTimeout(function(){window.scrollTo(0,0);}, 100)',
          'name' => 'SpektrixIFrame',
          'id' => 'SpektrixIFrame'
      ],
      '#prefix' => '<div class="grid no-banner"><div class="col-sm-12"><div class="m-entity m-entity__spektrix">',
      '#suffix' => '</div></div></div>'
    ];
  }

}
