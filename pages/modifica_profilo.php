<?php
if (!isset($_SESSION['utente']['tipo'])) {

    header("location: login.php");
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
    <title>UnimolShare - Il tuo profilo</title>
    <!-- Bootstrap core CSS-->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../css/c.css" rel="stylesheet">
</head>

<div class="content-wrapper bg-dark" style=" background: unset; padding-left:2%; padding-right: 2%">
    <div class="card card-register mx-auto mt-5" style=" border-radius: 3%; margin-bottom: auto!important;">
        <div class="card-header">Modifica profilo</div>
        <div class="card-body">
            <form method="POST">
                <div class="form-group mt-3">
                    <div class="form-group" style="display: none">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="InputName">Email</label>
                                <input class="form-control" id="Email" type="text" value="<?php echo $_SESSION['utente']['email']?>">
                            </div>
                        </div>
                    </div>
                    <div class="form-group" style="display: none">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="InputName">Matricola</label>
                                <input class="form-control" id="Matricola" type="text" value="<?php echo $_SESSION['utente']['matr']?>">
                            </div>
                        </div>
                    </div>
                    <div class="form-group" style="display: none">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="InputName">Tabella</label>
                                <input class="form-control" id="Tabella" type="text" value="<?php echo $_SESSION['utente']['tipo']?>">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="InputName">Nome</label>
                                <input class="form-control" id="InputName" type="text" aria-describedby="nameHelp" placeholder="<?php echo $_SESSION['utente']['nome']?>">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="InputSurname">Cognome</label>
                                <input class="form-control" id="InputSurname" type="text" aria-describedby="surnameHelp" placeholder="<?php echo $_SESSION['utente']['cognome']?>">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="InputNewPassword">Vecchia password</label>
                                <input class="form-control" id="InputOldPassword" type="text" aria-describedby="newpasswordHelp" placeholder="Inserisci la vecchia password">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="InputOldPassword">Nuova password</label>
                                <input class="form-control" id="InputNewPassword" type="text" aria-describedby="oldpasswordHelp" placeholder="Inserisci la nuova password">
                            </div>
                        </div>
                    </div>
                    <div class = "form-group">
                        <div class = "form-row" style="margin-right: 25px; margin-left: 25px;">
                            <div class="col-md-12">
                                <button type="button" id = "modifica" class="btn btn-primary btn-block" onclick="modifica_click()">Modifica</button>
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

<script src="../js/modifica_profilo.js"></script>

<script src="../vendor/jquery-easing/jquery.easing.min.js"></script>


</html>
