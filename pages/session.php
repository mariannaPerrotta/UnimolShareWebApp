<?php
session_start();

echo($_POST['matr']);

$_matricola = ($_POST['matr']);
$_SESSION['utente']= $_matricola;
return  $response=($_SESSION['utente']);
?>