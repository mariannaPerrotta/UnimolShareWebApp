<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>UnimolShare - Aggiungi documento</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>

<body class="bg-dark" style="padding-top: unset" style="padding-top: unset">
<div class="container">
    <div class="card card-register mx-auto mt-5">
        <div class="card-header">Aggiungi un nuovo libro da consigliare!</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6 mt-2">
                            <label for="CodDocente">Codice Docente*</label>
                            <input class="form-control" id="CodDocente" type="text" aria-describedby="CodDocenteHelp" placeholder="Inserisci la tua matricola">
                        </div>
                    </div>
                </div>
                <div class="form-grup">
                    <div class="form-row">
                        <div class="col-md-6 mt-2">
                            <label for="CasaEditrice">Casa Editrice*</label>
                            <input class="form-control" id="CasaEditrice" type="text" aria-describedby="CasaEditriceHelp" placeholder="Inserisci la casa editrice">
                        </div>
                    </div>
                </div>
                <div class="form-grup">
                    <div class="form-row">
                        <div class="col-md-6 mt-3">
                            <label for="Autore">Autore*</label>
                            <input class="form-control" id="Autore" type="text" aria-describedby="AutoreHelp" placeholder="Inserisci l'autore del libro">
                        </div>
                    </div>
                </div>
                <div class="form-grup">
                    <div class="form-row">
                        <div class="col-md-6 mt-3">
                            <label for="Edizione">Edizione*</label>
                            <input class="form-control" id="Edizione" type="text" aria-describedby="EdizioneHelp" placeholder="Inserisci l'edizione">
                        </div>
                    </div>
                </div>
                <div form="form-group">
                    <div class="form-row">
                        <label style="padding-top: 15px;padding-bottom: 15px;padding-right: 2%" for="Materie">Materie*</label>
                        <select name="Materia" id="Materia" style="height: 27px; border-top-width: 1px; margin-top: 14px;">
                            <option value="Matematica"> Matematica </option>
                            <option value="Programmazione"> Programmazione </option>
                            <option value="Informatica giuridica"> Informatica giuridica </option>
                            <option value="Linguaggi formali"> Linguaggi formali </option>
                            <option value="Architettura degli elaboratori"> Architettura degli elaboratori </option>
                            <option value="Evoluzione del calcolo automatico0"> Evoluzione del calcolo automatico </option>
                            <option value="Inglese"> Inglese </option>
                            <option value="Sistemi operativi"> Sistemi operativi </option>
                        </select>
                        </div>
                </div>
        </div>
        <div class = "form-group">
            <div class = "form-row" style="margin-right: 25px; margin-left: 25px;">
                <a class="btn btn-primary btn-block" href="Aggiungi_libro.php">Aggiungi</a>
            </div>
        </div>
        <div class = "form-group">
            <div class = "form-row" style="margin-right: 25px; margin-left: 25px; color: #bd2130">
                <a>I campi con * sono obbligatori</a>
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