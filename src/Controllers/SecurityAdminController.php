<?php
namespace App\Controllers;

use Dragon\Component\Controller\AbstractAdminController;
use Dragon\Component\Mailer\Mailer;

class SecurityAdminController extends AbstractAdminController
{
    public function login()
    {

        $mailer = new Mailer;

        // var_dump(mail("arnaud.bodel@wanadoo.fr", "Hello test", "blablabla"));
        return $this->render("_security/login.html");
    }
}