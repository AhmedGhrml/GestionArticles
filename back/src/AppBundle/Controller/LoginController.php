<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class LoginController extends Controller
{
    /**
     * @Route("api/login" ,name="login")
     * @param Request $request
     * @Method("POST")
     * @param AuthenticationUtils $authenticationUtils
     * @param $id
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function loginAction(Request $request ,AuthenticationUtils $authenticationUtils )
    {   $data = json_decode($request->getContent(), true);
        $username = $data;
        dump($username);
        $password = $data['password'];
        $errors = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();
        return $this->render('@App/Login/login.html.twig', array(
            'errors'=>$errors,
            'username'=>$lastUsername,
            'authentificated'=>true
        ));
        $username = $this->getUser()->getUsername();

    }

}
