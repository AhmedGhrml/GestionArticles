<?php

namespace AppBundle\Controller;

use JMS\Serializer\SerializationContext;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use AppBundle\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends Controller
{
    /**
     * @Route("api/user/{id}", name="homepage")
     * @Method("GET")
     *
     * @param $id
     *
     * @return JsonResponse
     */
    public function getUserById($id)
    {
        $repository = $this->getDoctrine()->getRepository(User::class);
        $user = $repository->find($id);

        if(empty($user)){
            return new JsonResponse(['msg'=>'Utilisateur non trouvé!!']);
        }

        $serializer = $this->get('jms_serializer');
        $userJson = $serializer->serialize($user,'json');
            return new JsonResponse(json_decode($userJson));


    }


    /**
     * @Route("api/users")
     * @Method("GET")
     * @return JsonResponse
     */
    public function getAllUsers()
    {
        $repository = $this->getDoctrine()->getRepository(User::class);
        $users = $repository->findAll();

        if(empty($users)){
            return new JsonResponse(['msg'=>'Pas dutilisateurs trouvé!!']);
        }

        $serializer = $this->get('jms_serializer');
        $usersJson = $serializer->serialize($users,'json');
        return new JsonResponse(json_decode($usersJson));


    }


}
