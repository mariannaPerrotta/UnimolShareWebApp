<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>UnimolShare - Il tuo profilo</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>

<div class="content-wrapper" style=" background: unset; padding-left:2%; padding-right: 2%">
    <div class="card card-register mx-auto mt-5" style=" border-radius: 3%; margin-bottom: auto!important;">
        <div class="card-header">Il mio profilo</div>
        <div class="card-body">
            <form method="POST">
                <a class="btn btn-primary btn-block ml-auto" style="padding-left: 0%;color:white;width: 30%"
                   id="btnmodificaprofilo">
                    <i class="fa fa-fw fa-pencil-square"></i>
                    <label for="modificaprofilo" style="padding-left: auto">Modifica</label>
                </a>
                <div class="form-group mt-3">

                    <label for="matricola">Matricola: <font
                                color="blue"><?php echo($_SESSION['utente']['matr']) ?></font></label>
                </div>
                <div class="form-group">
                    <label for="nome ">Nome: <font color="blue"><?php echo($_SESSION['utente']['nome']) ?></font>
                    </label>
                </div>
                <div class="form-group">
                    <label for="cognome">Cognome: <font
                                color="blue"><?php echo($_SESSION['utente']['cognome']) ?> </font></label>
                </div>
                <div class="form-group" id="idCdL">
                </div>
                <div class="form-group">
                    <label for="Email">Email: <font
                                color="blue"><?php echo($_SESSION['utente']['email']) ?> </font></label>


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

<script src="../../js/visualizza_profilo_studente.js"></script>

<script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>


</html>
