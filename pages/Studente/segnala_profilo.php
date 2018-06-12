<?php
if (($_SESSION['utente']['tipo'])!= "studente") {

    header("location: ../login.php");
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
    <title>UnimolShare - Segnala profilo</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>

<body class="bg-dark" style="padding-top: unset">
<div class="content-wrapper bg-dark">
    <div class="card card-register mx-auto mt-5">
        <div class="card-header">Segnala profilo</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="InputNome">Nome*</label>
                            <input class="form-control" id="InputNome" type="text" aria-describedby="NomeHelp"
                                   placeholder="Inserisci nome">
                        </div>
                        <div class="col-md-6">
                            <label for="InputCognome">Cognome*</label>
                            <input class="form-control" id="InputCognome" type="text" aria-describedby="CognomeHelp"
                                   placeholder="Inserisci cognome">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <label for="InputMotivo">Motivo della segnalazione*</label>
                        <input textarea class="form-control" id="InputMotivo" type="text" aria-describedby="MotivoHelp"
                                  placeholder="Inserisci il motivo della segnalazione"
                                  style="padding-bottom:200px; word-break: break-all;">
                            </textarea>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="InputContatto">Contatto da segnalare</label>
                            <input class="form-control" id="InputContatto" type="text" aria-describedby="ContattoHelp"
                                   placeholder="Inserisci contatto">
                        </div>
                        <div class="col-md-6">
                            <label for="InputEmail">Email da segnalare</label>
                            <input class="form-control" id="InputEmail" type="text" aria-describedby=EmailHelp"
                                   placeholder="Inserisci email">
                        </div>
                    </div>
                </div>
        </div>
        <div class="form-group">
            <div class="form-row" style="margin-right: 25px; margin-left: 25px;">
                <button type="button" class="btn btn-primary btn-block" id="invia">Invia</button>
            </div>
        </div>
        <div class="form-group">
            <div class="form-row" style="margin-right: 25px; margin-left: 25px; color: #bd2130">
                <a>* campi obbligatori</a>
            </div>
        </div>

        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fa fa-angle-up"></i>
        </a>
        <!-- Logout Modal-->
        <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ModalLabel">Sicuro di aver inserito i dati correttamente?</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">Seleziona "Invia" per inviare la segnalazione.</div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancella</button>
                        <a class="btn btn-primary" id="btnsegnalaprofilo" style="color:white">Invia</a>
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

<script src="../../js/Studente/segnala_profilo.js"></script>
</body>

</html>

//