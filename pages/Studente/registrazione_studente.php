<?php
session_start();
if(!empty($_SESSION['utente']['tipo'])){
    if (($_SESSION['utente']['tipo'])== "studente") {

        header("location: index.php");
    }
    if (($_SESSION['utente']['tipo'])== "docente") {

        header("location: ../login.php");
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>UnimolShare - Registrazione Studente</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>

<body class="bg-dark" style="padding-top: unset">
<div class="content-wrapper bg-dark" style="padding-right: 2%; padding-left:2%;">
    <div class="card card-register mx-auto mt-5">
        <div class="card-header">Registra studente</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="InputName" style="white-space: normal;word-break: break-word;">Nome*</label>
                            <input class="form-control" id="InputNome1" type="text"  placeholder="Inserisci nome">
                        </div>
                        <div class="col-md-6">
                            <label for="InputLastName" style="white-space: normal;word-break: break-word;">Cognome*</label>
                            <input class="form-control" id="InputCognome1" type="text"  placeholder="Inserisci cognome">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="InputEmail1" style="white-space: normal;word-break: break-word;">Indirizzo email*</label>
                            <input class="form-control" id="InputEmail1" type="email"  placeholder="Inserisci email">
                        </div>
                        <div class="col-md-6">
                            <label for="InputMatricola" style="white-space: normal;word-break: break-word;">Matricola*</label>
                            <input class="form-control" id="InputMatricola1"  placeholder="Inserisci matricola">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="InputCDL" style="white-space: normal;word-break: break-word;">Corso di laurea*</label>
                            <select id="seleziona_cdl">

                            </select>

                        </div>

                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="InputPassword1" style="white-space: normal;word-break: break-word;">Password*</label>
                            <input class="form-control" id="InputPassword1" type="password" placeholder="Password">
                        </div>
                        <div class="col-md-6">
                            <label for="ConfirmPassword" style="white-space: normal;word-break: break-word;">Conferma password*</label>
                            <input class="form-control" id="ConfirmPassword" type="password" placeholder="Conferma password">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label style="color: red; white-space: normal;word-break: break-word;">Campi obbligatori*</label>

                        </div>

                    </div>
                </div>
                <a class="btn btn-primary btn-block" id="btnregister-studente" style="color:white ;white-space: normal;word-break: break-word;">Registrati come studente</a>
            </form>
            <div class="text-center">
                <a class="d-block small mt-3" href="../login.php">Login</a>
                <a class="d-block small" href="../password_dimenticata.php">Password dimenticata?</a>
            </div>

<!--            <div class="form-group">-->
<!--                <div class="form-row">-->
<!--                    <div class="col-md-6">-->
<!--                        <label for="InputEmail1">Indirizzo email</label>-->
<!--                        <select  name="Cdl" id="cdl">-->
<!---->
<!--                        </select>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

        </div>
    </div>
</div>
<!-- Bootstrap core JavaScript-->
<script src="../../js/Studente/registrazione_studente.js"></script>
<script src="../../js/Studente/cdl_studente.js"></script>
<script src="../../vendor/jquery/jquery.min.js"></script>
<script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Core plugin JavaScript-->
<script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>
</body>

</html>
