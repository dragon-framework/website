<?php
namespace App\Controllers;

use Dragon\Component\Controller\AbstractController;

class DefaultController extends AbstractController
{
    public function index()
    {
        echo $this->generateUrl('books:read', [], true);
        return $this->render("homepage/index.html");
    }
}