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
    <title>UnimolShare - Segnala profilo</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>

<body class="bg-dark" style="padding-top: unset">
<div class="container">
    <div class="card card-register mx-auto mt-5">
        <div class="card-header">Segnala profilo</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="exampleInputNome">Nome*</label>
                            <input class="form-control" id="exampleInputNome" type="text" aria-describedby="NomeHelp" placeholder="Inserisci nome">
                        </div>
                        <div class="col-md-6">
                            <label for="exampleInputCognome">Cognome*</label>
                            <input class="form-control" id="exampleInputCognome" type="text" aria-describedby="CognomeHelp" placeholder="Inserisci cognome">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                            <label for="exampleInputMotivo">Motivo della segnalazione*</label>
                            <textarea class="form-control" id="exampleInputMotivo" type="text" aria-describedby="MotivoHelp" placeholder="Inserisci il motivo della segnalazione" style = "padding-bottom:200px; word-break: break-all;">
                            </textarea>
                    </div>
                </div>
        </div>
        <div class = "form-group">
            <div class = "form-row" style="margin-right: 25px; margin-left: 25px;">
                <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal" style="color: white">Invia</a>
            </div>
        </div>
        <div class = "form-group">
            <div class = "form-row" style="margin-right: 25px; margin-left: 25px; color: #bd2130">
                <a>I campi con * sono obbligatori</a>
            </div>
        </div>

            <!-- Scroll to Top Button-->
            <a class="scroll-to-top rounded" href="#page-top">
                <i class="fa fa-angle-up"></i>
            </a>
            <!-- Logout Modal-->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Sicuro di aver inserito i dati correttamente?</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">Seleziona "Invia" per inviare la segnalazione.</div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" type="button" data-dismiss="modal" >Cancella</button>
                            <a class="btn btn-primary"  href="../logout.php">Invia</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</div>


<!-- Bootstrap core JavaScript-->
<script src="../../vendor/jquery/jquery.min.js"></script>
<script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Core plugin JavaScript-->
<script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>
</body>

</html>