<?php
session_start();


$_POST['cdl']= $_SESSION["utente"]["cdl"];
$cdl= $_POST['cdl'];
echo($_POST['cdl']);
return  $response=($cdl);
?>


