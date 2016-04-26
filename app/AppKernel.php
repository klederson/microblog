<?php

use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class AppKernel extends Kernel
{
    /**
     * @return array
     */
    public function registerBundles()
    {
        $bundles = [
            new \Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new \Symfony\Bundle\TwigBundle\TwigBundle(),
            new \Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),
            new \BlogBundle\BlogBundle(),
        ];

        if ($this->getEnvironment() === 'dev') {
            $bundles[] = new \Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
        }

        return $bundles;
    }

    /**
     * @param LoaderInterface $loader
     */
    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(__DIR__ . '/config/config.yml');

        $isDevEnv = $this->getEnvironment() === 'dev';

        $loader->load(function(ContainerBuilder $container) use ($isDevEnv) {
            if ($isDevEnv === true) {
                $container->loadFromExtension('web_profiler', [
                    'toolbar' => true,
                ]);
                $container->loadFromExtension('framework', [
                    'router' => [
                        'resource' => '%kernel.root_dir%/config/routing_dev.yml'
                    ]
                ]);
            }
        });
    }
}
