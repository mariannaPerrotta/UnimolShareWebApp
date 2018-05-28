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

<body class="bg-dark">
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
                        <a class="nav-link nav-link-collapse" data-toggle="collapse" style="padding-top: 15px;padding-right: 10px;" href="#collapseMulti" data-parent="#exampleAccordion" aria-expanded="true">
                            <i class="fa fa-fw fa-arrow-circle-down"></i>
                        </a>
                        <label style="padding-top: 15px;padding-bottom: 15px;" for="Materie">Materie*</label>
                    </div>

                    <ul class="sidenav-second-level collapse show" id="collapseMulti" style="">
                        <li>
                            <a href="../login.php">Matematica</a>
                        </li>
                        <li>
                            <a href="../login.php">Programmazione</a>
                        </li>
                        <li>
                            <a href="../login.php">Ingegneria del software</a>
                        </li>
                        <li>
                            <a href="../login.php">Calcolo numerico</a>
                        </li>
                        <li>
                            <a href="../login.php">Fisica</a>
                        </li>
                    </ul>
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