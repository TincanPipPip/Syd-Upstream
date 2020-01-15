<?php

namespace Drupal\publishcontent\Controller;

use Drupal\node\NodeInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Drupal\Core\Url;

/**
 * Toggles node status.
 */
class PublishContentPublishEntity {

  /**
   * Toggle node status.
   *
   * @param \Drupal\node\NodeInterface $node
   *   Node being toggled.
   *
   * @return \Symfony\Component\HttpFoundation\RedirectResponse
   *   Redirect to the previous page.
   */
  public function toggleEntityStatus(NodeInterface $node) {
    $node->setPublished(!$node->isPublished());
    $node->save();

    $redirectUrl = Url::fromUri(\Drupal::request()->server->get('HTTP_REFERER'), ['absolute' => TRUE])->getUri();

    return new RedirectResponse($redirectUrl);
  }

}
