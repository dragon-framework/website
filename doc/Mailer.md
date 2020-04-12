
        $mailer = new Mailer;

        // Reset Expeditor
        // $mailer->setFrom("hello@osw3.net"); 
        
        //Recipients
        $mailer->addAddress('john@doe.com', 'John DOE'); // Add a recipient
        // $mailer->addAddress('ellen@example.com'); // Name is optional
        // $mailer->addReplyTo('info@example.com', 'Information');
        // $mailer->addCC('cc@example.com');
        // $mailer->addBCC('bcc@example.com');

        // Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

        // Content
        $mailer->setParams([
            'site_name' => getApp()->config()->get('title'),
            'firstname' => "Bruce",
        ]);
        $mailer->setSubject("[dragon security] Admin authentication");
        // $mailer->setBody("Test HTML Dragon");
        $mailer->setBodyTemplate("_security/email/auth-step-1.html");
        // $mailer->setAltBody("Test TEXT dragon");
        $mailer->setAltBodyTemplate("_security/email/auth-step-1.txt");

        $mailer->send();

