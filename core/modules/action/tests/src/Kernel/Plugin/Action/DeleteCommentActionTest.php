<?php

namespace Drupal\Tests\action\Kernel\Plugin\Action;

use Drupal\KernelTests\KernelTestBase;

/**
 * Tests for the DeleteNodeAction plugin.
 *
 * @group action
 */
class DeleteCommentActionTest extends KernelTestBase {

  /**
   * {@inheritdoc}
   */
  public static $modules = ['system', 'node', 'comment', 'action'];

  /**
   * {@inheritdoc}
   */
  protected function setUp() {
    parent::setUp();
  }

  /**
   * Test the delete node action plugin type.
   */
  public function testDeleteCommentActionType() {
    /** @var \Drupal\Core\Action\ActionManager $plugin_manager */
    $plugin_manager = $this->container->get('plugin.manager.action');
    $configuration = [];
    $definition = $plugin_manager
      ->createInstance('comment_delete_action', $configuration)
      ->getPluginDefinition();

    $this->assertArrayHasKey('type', $definition, "Plugin comment_delete_action require a plugin type.");
  }

}
