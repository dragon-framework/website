<?php
namespace App\Controllers;

use Dragon\Component\Controller\AbstractAdminController;

class DefaultAdminController extends AbstractAdminController
{
    public function index()
    {
        
        // dump( $this->generateUrl('books:create') );
        // dump( $this->generateUrl('books:create', [], true) );
        
        return $this->render("homepage/admin/index.html");
    }
}