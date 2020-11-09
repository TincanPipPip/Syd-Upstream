<?php

namespace Drupal\syd_tweaks\TwigExtension;

use Twig\TwigFunction;
use \Drupal\Core\File\FileSystem;

class Icon extends \Twig_Extension
{
    public function getFunctions()
    {
        return [
            new TwigFunction('get_icon', function ($icon) {
                self::getIcon($icon, '/dist/img/');
            })
        ];
    }
    
    /**
    * Get Icon
    * Gets an icon from the filesystem
    * Args are available in the template as $template_args array
    * @param string $file
    * @param string $path
    * @param string $ext
    * @return mixed
    */
    public static function getIcon($file, $path = '/', $ext = '.svg')
    {
        $file_handle = $file;
        $theme = \Drupal::theme()->getActiveTheme();
        $themeUri = $theme->getPath();
        
        if (file_exists(realpath($themeUri) . $path . $file . $ext)) {
            $file = realpath($themeUri) . $path . $file . $ext;
            
            ob_start();
            $return = require($file);
            $data = ob_get_clean();
            echo $data;
        }
        
        return null;
    }
}
