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


class DefaultController extends Controller



{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }


    /**
     * @Route("api/addPerson")
     * @Method("POST")
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @return Response
     */
    public function AddUser(Request $request,UserPasswordEncoderInterface $encoder)

    {

        $data = json_decode($request->getContent(), true);
        $email = $data['email'];
        $name = $data['name'];
        $password = $data['password'];
        $entityManager = $this->getDoctrine()->getManager();

        $user = new User();
        $user->setEmail($email);
        $user->setName($name);
        $encodedPW= $encoder->encodePassword($user,$password);
        $user->setPassword($encodedPW);

        // tells Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($user);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new JsonResponse(['msg'=>'Suceess']);

    }


    /**
     * @Route("api/userssss")
     * @Method("GET")
     */

    public function getAllUsers(){
        $repository = $this->getDoctrine()->getRepository(User::class);

        $users = $repository->findAll();
        $user = $repository->find(8);
        //$userEmail= $user->getEmail();
        if(empty($user)){
            return new JsonResponse(['msg'=>'No users are available']);
        }
        $serializer = $this->get('jms_serializer');
        $userJson = $serializer->serialize($user,'json');

        $response = $serializer->serialize($users,'json');

        //return new JsonResponse(json_decode($response));

    }
}
