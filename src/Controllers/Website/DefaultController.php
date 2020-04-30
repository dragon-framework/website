<?php
namespace App\Controllers\Website;

use Dragon\Component\Controller\AbstractController;

class DefaultController extends AbstractController
{
    public function index()
    {
        // dump( $this->user() );

        // dump( $this->isAnonymous() );
        // dump( $this->isAuthenticated() );

        // dump( $this->generateUrl('books:create') );
        // dump( $this->generateUrl('books:create', [], true) );
        
        return $this->render("pages/homepage.html");
    }
}