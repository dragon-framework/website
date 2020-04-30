<?php
namespace App\Controllers\Website;

use Dragon\Component\Controller\AbstractController;

class UserController extends AbstractController 
{
    public function resume()
    {
        return $this->render("pages/user/profile.html");
    }
}