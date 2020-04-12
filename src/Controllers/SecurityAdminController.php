<?php
namespace App\Controllers;

use Dragon\Component\Controller\AbstractAdminController;
use Dragon\Component\Mailer\Mailer;

class SecurityAdminController extends AbstractAdminController
{
    public function login()
    {
        if ($_SERVER['REQUEST_METHOD'] === "POST")
        {
            $hasError = false;


            // Retrieve Post data
            // --

            $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : null;


            // Check Post data
            // --

            if (null == $email)
            {
                // todo: message error
                $hasError = true;
            }


            // Check & Get user
            // --

            $user = [
                'email' => $email,
                'firstname' => "Bruce",
                'lastname' => "WAYNE",
                'fullname' => "Bruce WAYNE",
            ];
            $params = [
                'site_name' => getApp()->config()->get('title'),
                'firstname' => $user['firstname'],
            ];



            if (!$hasError)
            {
                $mailer = new Mailer;
                
                $mailer
                    ->addAddress($user['email'], $user['fullname'])
                    ->addReplyTo( getApp()->mailer()->get('noreply') )
                    ->setParams($params)
                    ->setSubject("[Dragon Auth] Log in to ". $params['site_name'])
                    ->setBodyTemplate("_security/email/auth-step-1.html")
                    ->setAltBodyTemplate("_security/email/auth-step-1.txt")
                    // ->send()
                ;

                return $this->render("_security/pages/auth-step-1-success.html");

            }
        }

        dump( $_SERVER );
        exit;

        return $this->render("_security/pages/auth-step-1.html");
    }
}