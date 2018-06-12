<?php
session_start();

$response = 0;

if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {
    if ( !empty($_POST) ) {
        if($_POST['cdls']){
            if(!empty($_SESSION['utente']['cdl'])) {
                $response = count($_SESSION['utente']['cdl']);
            }
        }
    }
}

echo $response;

?>


