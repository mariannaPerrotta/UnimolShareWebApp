<?php
session_start();

if (empty($_SESSION['utente']))
    header("location: pages/login.php");
else if($_SESSION['utente']['tipo']=='studente')
    header("location: pages/Studente/index.php");
else
    header("location: pages/Docente/index_doc.php");

?>