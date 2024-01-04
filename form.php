<?php
require('phpmailer/class.phpmailer.php');
$age = $_POST['age'];
$name = $_POST['name'];
$email = $_POST['email'];
$message = '<br>Name: '.$name. "\r\n";
$message .= '<br>Age: '.$age. "\r\n";
$message .= '<br>E-mail: '.$email. "\r\n";

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPDebug = 0;
$mail->SMTPAuth = FALSE;
$mail->SMTPSecure = "ssl";
$mail->Port     = 25;
$mail->CharSet = "utf-8";

$mail->Host     = "smtp.freesmtpservers.com";
$mail->Mailer   = "smtp";
$mail->SetFrom('valeryshel@yandex.ru', 'TEST MESSAGE');
$mail->AddAddress("valeryshel@yandex.ru");
$mail->Subject = 'Sent from valeryshel@yandex.ru';
$mail->WordWrap   = 80;
$mail->MsgHTML($message);


$mail->IsHTML(true);

if(!$mail->Send()) {
    echo '
    <div class="letter-block">
    <h1 class="letter-header" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">Упс...</h1>
    <img class="close-form" src="/wp-content/themes/nordcloud/img/work/close-btn.svg" alt="X">
    </div>
    <p class="letter-text" data-aos="fade-down" data-aos-duration="1200" data-aos-once="true">Ваше сообщение не было отправлено. <br> Пожалуйста, отправьте ваше резюме на <b class="violet-text">career@nordcloud.ru</b></a></p>
    <div class="letter-img">
        <img  data-aos="fade-down" data-aos-duration="1200" data-aos-once="true" src="/wp-content/themes/nordcloud/img/work/e-mail-fail.svg">
    </div>
    ';
} else {
    echo '
    <div class="letter-block">
        <h1 class="letter-header" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">Резюме отправлено!</h1>
        <img class="close-form" src="/wp-content/themes/nordcloud/img/work/close-btn.svg" alt="X">
    </div>
    <p class="letter-text"  data-aos="fade-down" data-aos-duration="1200" data-aos-once="true">Спасибо за Ваше обращение!</p>
    <div class="letter-img">
        <img  data-aos="fade-down" data-aos-duration="1200" data-aos-once="true" src="/wp-content/themes/nordcloud/img/work/e-mail-success.svg">
    </div>
    ';

}
?>