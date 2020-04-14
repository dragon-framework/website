<?php
namespace App\Controllers\BackOffice;

use Dragon\Component\Controller\AbstractAdminController;

class DefaultController extends AbstractAdminController
{
    public function index()
    {
        
        // dump( $this->generateUrl('books:create') );
        // dump( $this->generateUrl('books:create', [], true) );
        
        return $this->render("homepage/admin/index.html");
    }
}