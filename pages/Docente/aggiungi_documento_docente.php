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

<body class="bg-dark" style="padding-top: unset">
<div class="content-wrapper bg-dark" style="padding-left:2%; padding-right: 2%">
    <div class="card card-register mx-auto mt-5">
        <div class="card-header">Aggiungi documento Docente</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="exampleInputTitolo">Titolo</label>
                            <input class="form-control" id="exampleInputTitolo" type="text" aria-describedby="TitoloHelp" placeholder="Inserisci titolo">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="exampleInputCodDocente">Codice Docente</label>
                            <input class="form-control" id="exampleInputCodDocente" type="email" aria-describedby="CodDocenteHelp" placeholder="Inserisci Codice docente">
                        </div>
                    </div>
                </div>
                <div form="form-group">
                    <div class="form-row">
                        <label style="padding-right: 2%" for="Materie">Materie*</label>
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
        <div class="form-group">
            <div class="form-row" style="margin-right: 25px; margin-left: 25px;">
                <a class="btn btn-primary btn-block" href="../login.php">Link utili</a>
            </div>
        </div>
        <div class = "form-group">
            <div class = "form-row" style="margin-right: 25px; margin-left: 25px;">
                <a class="btn btn-primary btn-block" href="Aggiungi_documento_doc.php">Aggiungi</a>
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