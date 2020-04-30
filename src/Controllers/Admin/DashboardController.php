<?php
namespace App\Controllers\Admin;

use Dragon\Component\Controller\AbstractAdminController;

class DashboardController extends AbstractAdminController
{
    public function index()
    {
        
        // dump( $this->generateUrl('books:create') );
        // dump( $this->generateUrl('books:create', [], true) );
        
        return $this->render("pages/dashboard.html");
        // return $this->render("_admin/base.html");
    }
}