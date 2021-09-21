<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class TestController extends Controller
{
    /**
     * @Route("/test" , name="test")
     */
    public function testAction()
    {       $username = $this->getUser()->getUsername();
        return $this->render('@App/Test/test.html.twig', array(
            'username'=>$username
        ));
    }

}
