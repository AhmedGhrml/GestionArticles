<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Article;
use phpDocumentor\Reflection\Types\Array_;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Response;

class ArticleController extends Controller
{
    /**
     * @Route("api/article/ajouter")
     * @Method("POST")
     * @param Request $request
     * @return JsonResponse
     */
    public function AjouterArticle(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $auteur = $data['auteur'];
        $titre= $data['titre'];
        $contenu = $data['contenu'];
        $dateModif = $data['dateModif'];
        $aimes = $data['aimes'];
        $entityManager = $this->getDoctrine()->getManager();

        $article = new Article();
        $article->setAuteur($auteur);
        $article->setTitre($titre);
        $article->setContenu($contenu);
        $article->setDateModif($dateModif);
        $article->setAimes($aimes);

        // tells Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($article);
        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new JsonResponse(['msg'=>'Suceess']);

    }

    /**
     * @Route("api/article/aimes/{id}")
     * @Method("GET")
     * @param $id
     * @return void
     */
    public  function getPeopleLiked($id)
    {
        $repository = $this->getDoctrine()->getRepository(Article::class);
        $article = $repository->find($id);
        $likes = $article->getAimes();

        if(empty($article)){
            return new JsonResponse(['msg'=>'article non trouvé!!']);
        }

        $serializer = $this->get('jms_serializer');
        $articleJson = $serializer->serialize($likes,'json');
        return new JsonResponse(json_decode($articleJson));
    }


    /**
     * @Route("api/articles")
     * @Method("GET")

     * @return void
     */
    public function getAllArticles()
    {
        $repository = $this->getDoctrine()->getRepository(Article::class);
        $articles = $repository->findAll();
        if(empty($articles)){
            return new JsonResponse(['msg'=>'Pas darticles trouvé!!']);
        }

        $serializer = $this->get('jms_serializer');
        $articlesJson = $serializer->serialize($articles,'json');
        return new JsonResponse(json_decode($articlesJson));
    }

    /**
     * @Route("api/article/{id}")
     * @Method("GET")
     * @param $id
     * @return void
     */
    public  function getArticleById($id)
    {
        $repository = $this->getDoctrine()->getRepository(Article::class);
        $article = $repository->find($id);


        if(empty($article)){
            return new JsonResponse(['msg'=>'article non trouvé!!']);
        }

        $serializer = $this->get('jms_serializer');
        $articleJson = $serializer->serialize($article,'json');
        return new JsonResponse(json_decode($articleJson));
    }


    /**
     * @Route("api/articless/{id}")
     * @Method("PUT")
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function modifierArticle(Request $request,$id)
    {   $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);
        $titre = $data['titre'];
        $repository = $this->getDoctrine()->getRepository(Article::class);
        $article = $repository->find($id);
        $article->setTitre($titre);
        $entityManager->persist($article);
        $entityManager->flush();



        $articlemodif = $repository->find($id);


        if(empty($article)){
            return new JsonResponse(['msg'=>'article non trouvé!!']);
        }

        $serializer = $this->get('jms_serializer');
        $articleJson = $serializer->serialize($articlemodif,'json');
        return new JsonResponse(json_decode($articleJson));
    }

    /**
     * @Route("api/articles/{id}")
     * @Method("DELETE")
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */

    public function supprimerArticle($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $repository = $this->getDoctrine()->getRepository(Article::class);
        $article = $repository->find($id);
        $entityManager->remove($article);
        $entityManager->flush();
        return new JsonResponse(['msg'=>"article  supprimé"]);

    }


    /**
     * @Route("api/articlesss/delete")
     * @Method("DELETE")
     * @param Request $request
     * @return JsonResponse
     */

    public function supprimerPlusieurArticles(Request $request)
    {   $data = json_decode($request->getContent(), true);
            print_r($data);
        $entityManager = $this->getDoctrine()->getManager();
        $repository = $this->getDoctrine()->getRepository(Article::class);



        foreach($data as $id) {
            $article = $repository->find($id);
            $entityManager->remove($article);
            $entityManager->flush();
        }

        return new JsonResponse(['msg'=>"article  supprimé"]);

    }


    /**
     * @Route("api/articleAime/{id}")
     * @Method("PUT")
     * @param Request $request
     * @param $id
     *
     * @return JsonResponse
     */
    public function aimerArticle(Request $request,$id )
    {   $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);
        $personne = $data['personne'];

        $repository = $this->getDoctrine()->getRepository(Article::class);
        $article = $repository->find($id);
        $lesJaimes=$article->getAimes();
        array_push($lesJaimes,$personne);
        //print_r($nouveauArray);
        print_r($lesJaimes);

        $article->setAimes($lesJaimes);
        $entityManager->persist($article);
        $entityManager->flush();



        $articlemodif = $repository->find($id);


        if(empty($article)){
            return new JsonResponse(['msg'=>'article non trouvé!!']);
        }

        $serializer = $this->get('jms_serializer');
        $articleJson = $serializer->serialize($articlemodif,'json');
        return new JsonResponse(json_decode($articleJson));
    }







}
