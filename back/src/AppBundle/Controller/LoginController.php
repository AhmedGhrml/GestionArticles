<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class LoginController extends Controller
{
    /**
     * @Route("api/login")
     */
    public function Login()
    {
        return $this->render('AppBundle:Login:login.html.twig', array(
            // ...
        ));
    }

}
