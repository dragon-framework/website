<?php
namespace App\Controllers;

use Dragon\Component\Controller\AbstractAdminController;
use Dragon\Component\Mailer\Mailer;

class SecurityAdminController extends AbstractAdminController
{
    public function login()
    {
        if ($this->request()->isPost())
        {
            $hasError = false;


            // Retrieve Post data
            // --

            $email = $this->request()->request()->get('email');


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

            // dump( $email );
            // dump( $user );
            // dump( $params );
            // exit;



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
                    ->send()
                ;

                $this->redirectToRoute("admin:security:pending");
            }
        }

        return $this->render("_security/pages/auth-step-1.html");
    }

    public function authPending()
    {
        echo "Pending";

        exit;
    }
}