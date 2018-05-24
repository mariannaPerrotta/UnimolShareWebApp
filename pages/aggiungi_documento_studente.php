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
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../css/sb-admin.css" rel="stylesheet">
</head>

<body class="bg-dark">
<div class="container">
    <div class="card card-register mx-auto mt-5">
        <div class="card-header">Aggiungi documento Studente</div>
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
                            <label for="exampleInputCodDocente">Codice studente</label>
                            <input class="form-control" id="exampleInputCodDocente" type="email" aria-describedby="CodDocenteHelp" placeholder="Inserisci Codice docente">
                        </div>
                    </div>
                </div>
                <div form="form-group">
                    <li class="nav-item" data-toggle="tooltip" title="Materie">
                        <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#ExampleMaterie" data-parent="#exampleAccordion">
                            <span class="nav-link-text">Materie</span>
                        </a>
                        <ul class="sidenav-second-level collapse" id="ExampleMaterie">
                            <li>
                                <a href="login.php">Matematica</a>
                            </li>
                            <li>
                                <a href="login.php">Programmazione</a>
                            </li>
                            <li>
                                <a href="login.php">Ingegneria del software</a>
                            </li>
                        </ul>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <label for="exampleInputLink">Link</label>
                            <input class="form-control" id="exampleInputLink" type="text" placeholder="Link">
                        </div>
                    </div>
                </div>
                <div class = "form-group">
                    <div class = "form-row">
                        <a class="btn btn-primary btn-block" href="aggiungi_documento_studente.php">Aggiungi</a>
                    </div>
                </div>
        </div>
    </div>
    </form>
</div>
</div>
</div>
<!-- Bootstrap core JavaScript-->
<script src="../vendor/jquery/jquery.min.js"></script>
<script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Core plugin JavaScript-->
<script src="../vendor/jquery-easing/jquery.easing.min.js"></script>
</body>

</html>