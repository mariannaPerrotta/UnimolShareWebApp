
<!DOCTYPE html>
<html lang="en">

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

<div class="content-wrapper" style="background: unset; padding-left:2%; padding-right: 2%">
    <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">
        <div class="card-header">Aggiungi documento Studente</div>
            <div class="card-body">
                <form id = "form-carica">
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <input class="form-control-file" type="file" id="file" name="file">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="InputTitolo">Titolo</label>
                                <input class="form-control" id="InputTitolo" type="text" aria-describedby="TitoloHelp" placeholder="Inserisci titolo">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label style="padding-top: 15px;padding-bottom: 15px;padding-right: 2%" for="Materia">Materia</label>
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
            </div>
            <div class = "form-group">
                <div class = "form-row" style="margin-right: 25px; margin-left: 25px;">
                    <div class="col-md-12">
                        <a id = "aggiungi" class="btn btn-primary btn-block" href="#">Aggiungi</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="../../js/carica_documento.js"></script>

</html>