<?php

namespace Drupal\Publishcontent\Plugin\Views\field;

use Drupal\Core\Link;
use Drupal\Core\Url;
use Drupal\views\Plugin\views\field\FieldPluginBase;
use Drupal\views\ResultRow;

/**
 * Field handler to flag the node type.
 *
 * @ingroup views_field_handlers
 *
 * @ViewsField("publishcontent_node")
 */
class PublishContentNode extends FieldPluginBase {

  /**
   * {@inheritdoc}
   */
  public function query() {
    // Leave empty to avoid a query on this field.
  }

  /**
   * {@inheritdoc}
   */
  public function render(ResultRow $values) {
    $id = $values->_entity->id();
    $url = Url::fromRoute('entity.node.publish', ['node' => $id]);
    $text = $values->_entity->isPublished() ? $this->t('Unpublish') : $this->t('Publish');
    $link = Link::fromTextAndUrl($text, $url);

    $render_array = $link->toRenderable();
    return $this->getRenderer()->render($render_array);
  }

}
