<?php
session_start();
if(!empty($_SESSION['utente']['tipo'])){
if (($_SESSION['utente']['tipo'])== "studente") {

header("location: ../login.php");
}
if (($_SESSION['utente']['tipo'])== "docente") {

header("location: index_doc.php");
}
}
?>
<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>UnimolShare - Registrazione Docente</title>
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
        <div class="card-header">Registra docente</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="InputNome" style="white-space: normal;word-break: break-word;">Nome*</label>
                            <input class="form-control" id="InputNome" type="text" aria-describedby="nameHelp" placeholder="Inserisci nome">
                        </div>
                        <div class="col-md-6">
                            <label for="InputCognome" style="white-space: normal;word-break: break-word;">Cognome*</label>
                            <input class="form-control" id="InputCognome" type="text" aria-describedby="nameHelp" placeholder="Inserisci cognome">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="InputEmail" style="white-space: normal;word-break: break-word;">Indirizzo email*</label>
                            <input class="form-control" id="InputEmail" type="email" aria-describedby="emailHelp" placeholder="Inserisci email">
                        </div>
                        <div class="col-md-6">
                            <label for="InputMatricola" style="white-space: normal;word-break: break-word;">Matricola*</label>
                            <input class="form-control" id="InputMatricola" type="text" aria-describedby="matricolaHelp" placeholder="Inserisci matricola">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="InputPassword" style="white-space: normal;word-break: break-word;">Password*</label>
                            <input class="form-control" id="InputPassword" type="password" placeholder="Password">
                        </div>
                        <div class="col-md-6">
                            <label for="ConfirmPassword" style="white-space: normal;word-break: break-word;">Conferma password*</label>
                            <input class="form-control" id="ConfirmPassword" type="password" placeholder="Conferma password">
                        </div>
                    </div>
                </div>
            </form>
            <form method="POST" id="form">
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6" id="cdls"    style="max-width: 100%; flex: 100%;" >
                            <label id="corsi_di_laurea" style="white-space: normal;word-break: break-word;"> cdl*</label></div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label style="color: red; white-space: normal;word-break: break-word;">Campi obbligatori*</label>

                        </div>

                    </div>
                </div>
                <button type="button" class="btn btn-primary btn-block" style="white-space: normal;word-break: break-word;"id="btnregisterdoc">Registrati come docente</button>
            </form>
            <div class="text-center">
                <a class="d-block small mt-3" href="../login.php">Login</a>
                <a class="d-block small" href="../password_dimenticata.php">Password dimenticata?</a>
            </div>
        </div>
    </div>
</div>
<!-- Bootstrap core JavaScript-->
<script src="../../vendor/jquery/jquery.min.js"></script>
<script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Core plugin JavaScript-->
<script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>
<script src="../../js/Docente/cdl_docente.js"></script>
<script src="../../js/Docente/registrazione_docente.js"></script>
<!--script src="../../js/Docente/testreg.js"></script-->
</body>

</html>
