<?php
  $name = $_POST['fname'];
  $name = $_POST['lname'];
  $visitor_email = $_POST['email'];
  $message = $_POST['subject'];


$email_from = $visitor_email;

	$email_subject = "New Form submission Resume";

	$email_body = "You have received a new message from the user $fname $lname.\n".
                            "Here is the message:\n $message".



  $to = "adis.qm@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

 ?>