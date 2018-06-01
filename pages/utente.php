<?php
session_start();


$_POST['matr']= $_SESSION["utente"]["matr"];
$matr= $_POST['matr'];
echo($_POST['matr']);
return  $response=($matr);
?>


