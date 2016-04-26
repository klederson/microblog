<?php

namespace BlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller
{
    public function indexAction()
    {
        return $this->render('blog/index.twig', [
            'quote' => 'Here I am',
        ]);
    }

    public function postAction()
    {
        return $this->render('blog/post.twig', [
            'quote' => 'Here I have my post',
        ]);
    }
}
