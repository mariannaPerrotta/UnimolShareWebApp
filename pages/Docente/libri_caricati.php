<?php
if (($_SESSION['utente']['tipo'])!= "docente") {

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
    <title>UnimolShare - I tuoi libri</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>

<body class="container bg-dark" style="padding-top: unset">
<!--fare for per visualizzare 1 carta per ogni libro con chiamata php-->
<div class="content-wrapper bg-dark" style="padding-left:2%; padding-right: 2%">
    <div class="card card-register mx-auto mt-5" style=" border-radius: 3%">
        <div class="card-body">
            <form method="POST" style="padding-left: 5%;">
                <a class="btn btn-primary btn-block ml-auto" style="padding-left: 0%;color:white;width: 30%"
                   id="btnrimuoviannuncio">
                    <i class="fa fa-fw fa-minus-circle"></i>
                    <label for="rimuovidocumento" style="padding-left: auto">Rimuovi</label>
                </a>
                <div class="form-group mt-3">
                    <label for="titololibro">Titolo libro: <font
                                color="blue"><?php echo($_SESSION['utente']['matr']) ?></font></label>
                </div>
                <div class="form-group">
                    <label for="autorelibro">Autore: <font
                                color="blue"><?php echo($_SESSION['utente']['matr']) ?></font></label>
                </div>
                <div class="form-group">
                    <label for="casaeditrice">Casa editrice: <font
                                color="blue"><?php echo($_SESSION['utente']['matr']) ?></font></label>
                </div>
                <div class="form-group">
                    <label for="edizionelibro">Edizione: <font
                                color="blue"><?php echo($_SESSION['utente']['matr']) ?></font></label>
                </div>
                <label for="materia">Materia: <font
                            color="blue"><?php echo($_SESSION['utente']['matr']) ?></font></label>
        </div>
        </form>
    </div>
</div>
</div>
<!-- Bootstrap core JavaScript-->
<script src="../../vendor/jquery/jquery.min.js"></script>
<script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Core plugin JavaScript-->

<script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>

<script src="../../js/login.js"></script>


<script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>

</body>

</html>
