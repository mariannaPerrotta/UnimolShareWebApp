<?php
session_start();

if (empty($_SESSION['utente'])){

    header("location: ../login.php");
}
  else{
//gestione azioni
if (isset($_GET['action'])){
    $action = $_GET['action'];}
else{
   // header("location: ./index.php");
    $action = 'home';}
  }
?>

<?php
session_start();
?>
<html lang ="en">

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
<div>
   <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
    <?php
       include('./header.php');
    ?>


</nav>
    <?php
    switch ($action){
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
        case 'documentoCaricati' :
            include 'documenti_caricati.pho';
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
<script src="../js/forgot-password.js"></script>
<script src="../js/register-docente.js"></script>
<script src="../js/register-studente.js"></script>
<script src="../js/Aggiungi_documento_docente.js"></script>


</body>
</html>