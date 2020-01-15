<?php

namespace Drupal\Tests\action\Kernel\Plugin\Action;

use Drupal\KernelTests\KernelTestBase;

/**
 * Tests for the DeleteNodeAction plugin.
 *
 * @group action
 */
class DeleteNodeActionTest extends KernelTestBase {

  /**
   * {@inheritdoc}
   */
  public static $modules = ['system', 'node', 'action'];

  /**
   * {@inheritdoc}
   */
  protected function setUp() {
    parent::setUp();
  }

  /**
   * Test the delete node action plugin type.
   */
  public function testDeleteNodeActionType() {
    /** @var \Drupal\Core\Action\ActionManager $plugin_manager */
    $plugin_manager = $this->container->get('plugin.manager.action');
    $configuration = [];
    $definition = $plugin_manager
      ->createInstance('node_delete_action', $configuration)
      ->getPluginDefinition();

    $this->assertArrayHasKey('type', $definition, "Plugin node_delete_action require a plugin type.");
  }

}
