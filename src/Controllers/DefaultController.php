<?php
namespace App\Controllers;

use Dragon\Component\Controller\AbstractController;

class DefaultController extends AbstractController
{
    public function index()
    {
        return $this->render("index.html");
    }
}