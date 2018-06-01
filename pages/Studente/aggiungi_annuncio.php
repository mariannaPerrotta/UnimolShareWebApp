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
    <title>UnimolShare - Aggiungi annuncio</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>

<body class="bg-dark">
<div class="content-wrapper">
    <div class="card card-register mx-auto mt-5">
        <div class="card-header">Aggiungi annuncio</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="exampleInputTitolo">Titolo*</label>
                            <input class="form-control" id="exampleInputTitolo" type="text" aria-describedby="TitoloHelp" placeholder="Inserisci titolo">
                        </div>
                        <div class="col-md-6">
                            <label for="exampleInputAutore">Autore*</label>
                            <input class="form-control" id="exampleInputTitolo" type="text" aria-describedby="AutoreHelp" placeholder="Inserisci autore">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="exampleInputCorsoDiStudio">Corso di studio*</label>
                            <input class="form-control" id="exampleInputCorsoDiStudio" type="text" aria-describedby="CorsoDiStudioHelp" placeholder="Inserisci il corso">
                        </div>
                        <div class="col-md-6">
                            <label for="exampleInputMateria">Materia*</label>
                            <input class="form-control" id="exampleInputMateria" type="text" aria-describedby="MateriaHelp" placeholder="Inserisci la materia">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="exampleInputMateria">Contatto telefonico</label>
                            <input class="form-control" id="exampleInputContattoTelefonico" type="text" aria-describedby="ContattoTelefonicoHelp" placeholder="Inserisci telefono">
                        </div>
                        <div class="col-md-6">
                            <label for="exampleInputPrezzo">Prezzo*</label>
                            <input class="form-control" id="exampleInputPrezzo" type="text" aria-describedby="PrezzoHelp" placeholder="Inserisci il prezzo">
                        </div>
                    </div>
                </div>
        </div>
        <div class = "form-group">
            <div class = "form-row" style="margin-right: 25px; margin-left: 25px;">
                <a class="btn btn-primary btn-block" href="../login.php">Aggiungi</a>
            </div>
        </div>
        <div class = "form-group">
            <div class = "form-row" style="margin-right: 25px; margin-left: 25px; color: #bd2130">
                <a>* campi obbligatori</a>
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