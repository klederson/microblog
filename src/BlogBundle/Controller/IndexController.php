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

    public function postAction()
    {
        return $this->render('blog/post.twig', [
            'quote' => 'Here I have my post',
        ]);
    }
}
