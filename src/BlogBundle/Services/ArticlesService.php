<?php

namespace BlogBundle\Services;

use Symfony\Component\Finder\Finder;
use Symfony\Component\Finder\SplFileInfo;

class ArticlesService
{
    protected $markdown;

    /**
     * @return array
     */
    public function getArticlesList()
    {
        $finder = new Finder();
        $finder->files()
            ->name('*.md')
            ->in(__DIR__ . '/../Resources/data/')
        ;

        $articles = [];
        /** @var SplFileInfo $file */
        foreach ($finder as $file) {
            $articles[] = [
                'title' => $this->filterFileName($file),
                'registered' => $file->getMTime(),
                'content' => '',
            ];
        }

        return $articles;
    }

    /**
     * @param SplFileInfo $fileInfo
     *
     * @return string
     */
    protected function filterFileName(SplFileInfo $fileInfo)
    {
        $text = $fileInfo->getFilename();
        $text = str_replace('.md', '', $text);


        return $text;
    }
}