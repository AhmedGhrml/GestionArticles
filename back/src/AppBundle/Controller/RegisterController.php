<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use AppBundle\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class RegisterController extends Controller
{
    /**
     * @Route("api/register")
     * @Method("POST")
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @return JsonResponse
     */
    public function Register(Request $request,UserPasswordEncoderInterface $encoder)
    {
        $data = json_decode($request->getContent(), true);
        $email = $data['email'];
        $name = $data['name'];
        $password = $data['password'];
        $entityManager = $this->getDoctrine()->getManager();

        $user = new User();
        $user->setEmail($email);
        $user->setName($name);
        $user->setnbArticle(0);
        $encodedPW= $encoder->encodePassword($user,$password);
        $user->setPassword($encodedPW);

        // tells Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($user);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new JsonResponse(['msg'=>'Suceess']);
    }

}
