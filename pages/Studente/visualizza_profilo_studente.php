<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>UnimolShare - Il tuo profilo</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>
<body class="container bg-dark">
<div class="card mt-3 col-md-4"style="border-color: #007bff; border-radius: 3%">
    <div class="card-body">
        <form method="POST" style="padding-left: 0.25%">
            <a class="btn btn-primary btn-block ml-auto" style="padding-left: 0%;color:white;width: 30%" id="btnmodificaprofilo">
                <i class="fa fa-fw fa-pencil-square"></i>
                <label for="modificaprofilo" style="padding-left: auto">Modifica</label>
            </a>
            <div class="form-group mt-3">
                <label for="matricola">Matricola: <?php echo($_SESSION['utente']['matr'])?></label>
            </div>
            <div class="form-group">
                <label for="nome">Nome:</label>
            </div>
            <div class="form-group">
                <label for="cognome">Cognome:</label>
            </div>
            <div class="form-group">
                <label for="CDL">Corso di Laurea:</label>
            </div>
            <div class="form-group">
                <label for="Email">Email:</label>
            </div>
            <div class="form-group">
                <label for="password" type="password">Password:</label>
            </div>

        </form>
    </div>
</div>
<!-- Bootstrap core JavaScript-->
<script src="../../vendor/jquery/jquery.min.js"></script>
<script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Core plugin JavaScript-->

<script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>

<script src="../../js/login.js"></script>


<script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>

</body>

</html>
