<?php
session_start();

if (($_SESSION['utente']['tipo'])!= "studente") {

    header("location: ../login.php");
} else {
//gestione azioni
    if (isset($_GET['action'])) {
        $action = $_GET['action'];
    } else {
        // header("location: ./index.php");
        $action = "home";
    }
}
?>


<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>UnimolShare</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">

</head>


<body>
<div id="index">
    <!--   <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">

    </nav-->
    <?php
    include('./header.php');

    switch ($action) {
        case 'home' :
            include 'home.php';
            break;
        case 'documentoStudente' :
            include 'aggiungi_documento_studente.php';
            break;
        case 'aggiungiAnnuncio' :
            include 'aggiungi_annuncio.php';
            break;
        case 'annunciCaricati' :
            include 'annunci_caricati.php';
            break;
        case 'segnalaProfilo' :
            include 'segnala_profilo.php';
            break;
        case 'documenti_caricati' :
            include 'documenti_caricati.php';
            break;
        case 'profilo':
            include 'visualizza_profilo_studente.php';
            break;
        case 'libri_consigliati':
            include 'libri_consigliati.php';
            break;
        case 'lista_documenti':
            include 'lista_documenti.php';
            break;
        case 'lista_annunci':
            include 'lista_annunci.php';
            break;
        case 'visualizza_materie':
            include 'visualizza_materie.php';
            break;
        case 'segnala_profilo':
            include 'segnala_profilo.php';
            break;
        case 'ricerca':
            include 'ricerca.php';
            break;
        case 'modifica_profilo':
            include '../modifica_profilo.php';
            break;
    }

    ?>


</div>
<!-- Bootstrap core JavaScript-->
<script src="../../vendor/jquery/jquery.min.js"></script>
<script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Core plugin JavaScript-->
<script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>
<!-- Page level plugin JavaScript-->
<script src="../../vendor/chart.js/Chart.min.js"></script>
<script src="../../vendor/datatables/jquery.dataTables.js"></script>
<script src="../../vendor/datatables/dataTables.bootstrap4.js"></script>
<!-- Custom scripts for all pages-->
<script src="../../js/sb-admin.min.js"></script>
<!-- Custom scripts for this page-->
<script src="../../js/sb-admin-datatables.min.js"></script>
<script src="../../js/sb-admin-charts.min.js"></script>
<script src="../../js/login.js"></script>
<script src="../../js/password_dimenticata.js"></script>
<script src="../../js/registrazione_docente.js"></script>
<script src="../../js/registrazione_studente.js"></script>
<script src="../../js/segnala_profilo.js"></script>

</body>
</html>