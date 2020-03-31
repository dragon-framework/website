<?php
namespace App\Controllers;

use Dragon\Component\Controller\AbstractController;

class DefaultController extends AbstractController
{
    public function index()
    {
        // dump( $this->generateUrl('books:create') );
        // dump( $this->generateUrl('books:create', [], true) );
        
        return $this->render("homepage/index.html");
    }
}