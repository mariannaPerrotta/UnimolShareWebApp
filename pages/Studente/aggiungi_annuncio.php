<?php
if (($_SESSION['utente']['tipo'])!= "studente") {

header("location: ../login.php");
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
    <title>UnimolShare - Aggiungi annuncio</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>

<div class="content-wrapper" style="background: unset; padding-left:2%; padding-right: 2%">
    <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">
        <div class="card-header">Aggiungi annuncio</div>
        <div class="card-body">
            <form id="form-carica">
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="InputTitolo" style="white-space: normal;word-break: break-word; " >Titolo*</label>
                            <input class="form-control" id="InputTitolo" type="text" aria-describedby="TitoloHelp" placeholder="Inserisci titolo">
                        </div>
                        <div class="col-md-6">
                            <label for="InputContatto" style="white-space: normal;word-break: break-word; " >Contatto</label>
                            <input class="form-control" id="InputContatto" type="text" aria-describedby="ContattoHelp" placeholder="Inserisci contatto">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="InputPrezzo" style="white-space: normal;word-break: break-word; " >Prezzo*</label>
                            <input class="form-control" id="InputPrezzo" type="text" aria-describedby="PrezzoHelp" placeholder="Inserisci prezzo">
                        </div>
                        <div class="col-md-6">
                            <label for="InputEdizione" style="white-space: normal;word-break: break-word; " >Edizione*</label>
                            <input class="form-control" id="InputEdizione" type="text" aria-describedby="EdizioneHelp" placeholder="Inserisci edizione">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="InputCasaEditrice" style="white-space: normal;word-break: break-word; " >Casa editrice*</label>
                            <input class="form-control" id="InputCasaEditrice" type="text" aria-describedby="CasaEditriceHelp" placeholder="Inserisci casa editrice">
                        </div>
                        <div class="col-md-6">
                            <label for="InputAutore" style="white-space: normal;word-break: break-word; " >Autore*</label>
                            <input class="form-control" id="InputAutore" type="text" aria-describedby="AutoreHelp" placeholder="Inserisci autore">
                        </div>
                        <div class="col-md-6" style="display: none">
                            <label for="InputStudente" style="white-space: normal;word-break: break-word; " >Autore*</label>
                            <input class="form-control" id="InputStudente" type="text" value="<?php echo ($_SESSION['utente']['matr'])?>" ">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label style="padding-top: 15px;padding-bottom: 15px;padding-right: 2%;white-space: normal;word-break: break-word;" for="lista_materie">Materia*</label>
                            <select name="Materia" id="btnmaterie" style="height: auto; width: 100%;">
                            </select>
                        </div>
                    </div>
                </div>

        </div>
        <div class = "form-group">
            <div class = "form-row" style="margin-right: 25px; margin-left: 25px;">
                <a id="aggiungi_annuncio"  style="white-space: normal;word-break: break-word; color: white" class="btn btn-primary btn-block">Aggiungi</a>
            </div>
        </div>
        <div class = "form-group">
            <div class = "form-row" style="margin-right: 25px; margin-left: 25px; color: #bd2130">
                <a style="white-space: normal;word-break: break-word; ">* campi obbligatori</a>
            </div>
        </div>
    </div>
</div>
<script src="../../vendor/jquery/jquery.min.js"></script>
<script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Core plugin JavaScript-->

<script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>
<script src="../../js/Studente/aggiungi_annuncio.js"></script>
<script src="../../js/Studente/materie.js"></script>
</html>