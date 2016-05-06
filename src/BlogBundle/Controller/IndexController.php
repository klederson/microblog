<?php

namespace BlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller
{
    public function indexAction()
    {
        $articles = $this->get('articles_service')
            ->getArticlesList()
        ;

        return $this->render('blog/index.twig', [
            'articles' => $articles,
        ]);
    }

    public function postAction($seo_title)
    {
        $article = $this->get('articles_service')
            ->getArticlesBySeoTitle($seo_title)
        ;

        return $this->render('blog/post.twig', [
            'art' => $article,
        ]);
    }
}
