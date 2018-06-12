<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>UnimolShare - I tuoi annunci</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>
<?php
if (($_SESSION['utente']['tipo'])!= "studente") {

    header("location: ../login.php");
}
?>
<div class="content-wrapper" style="background: unset; padding-left:2%; padding-right: 2%">
    <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">
        <div class="card-header">Aggiungi documento Studente</div>
            <div class="card-body">
                <form id = "form-carica">
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">

                                <label class="btn btn-primary btn-block" style="width: 50%" for="myFile">Scegli il  file</label>
                                <input  type="file" name="myFile" id="myFile" style="display:none">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="InputTitolo">Titolo</label>
                                <input class="form-control" id="InputTitolo" type="text" aria-describedby="TitoloHelp" placeholder="Inserisci titolo">
                                <input id="InputMatricola" type="hidden" value="<?php echo ($_SESSION['utente']['matr']);?>">
                                <input id="InputTipo" type="hidden" value="<?php echo ($_SESSION['utente']['tipo']);?>">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label style="padding-top: 15px;padding-bottom: 15px;padding-right: 2%" for="lista_materie">Materia</label>
                                <select name="Materia" id="btnmaterie" style="height: 27px; border-top-width: 1px; margin-top: 14px;">
                                </select>
                            </div>
                        </div>
                    </div>
            </div>
            <div class = "form-group">
                <div class = "form-row" style="margin-right: 25px; margin-left: 25px;">
                    <div class="col-md-12">
                        <a id = "aggiungi" class="btn btn-primary btn-block" style="color:white" >Aggiungi</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="../../js/visualizza_materie.js"></script>
    <script src="../../js/carica_documento.js"></script>
<script src="../../js/materie.js"></script>
</html>