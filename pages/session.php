<?php
session_start();

echo($_POST['tipo']);

$_matricola = ($_POST['matr']);
$_nome=($_POST['nome']);
$cognome=($_POST['cognome']);
$email=($_POST['email']);
$tipo=($_POST['tipo']);
$cdl=($_POST['cdl']);
$_SESSION['utente']['matr']= $_matricola;
$_SESSION['utente']['nome']=$_nome;
$_SESSION['utente']['cognome']=$cognome;
$_SESSION['utente']['email']=$email;
$_SESSION['utente']['tipo']=$tipo;
$_SESSION['utente']['cdl']=$cdl;
return  $response = $tipo;
?>