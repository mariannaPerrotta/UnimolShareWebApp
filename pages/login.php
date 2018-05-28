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
    <title>UnimolShare - Login</title>
    <!-- Bootstrap core CSS-->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../css/c.css" rel="stylesheet">
</head>

<body class="bg-dark">
<div class="container">
    <div class="card card-login mx-auto mt-5">
        <div class="card-header">Login</div>
        <div class="card-body">
            <form method="POST">
                <div class="form-group">
                    <label for="exampleInputEmail1">Indirizzo email</label>
                    <input class="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Inserisci email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input class="form-control" id="exampleInputPassword1" type="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox"> Memorizza password</label>
                    </div>
                </div>
                <a class="btn btn-primary btn-block" style="color:white" id="btnlogin">Login</a>

            </form>
            <div class="text-center">
                <a class="d-block small mt-3" href="Studente/registrazione_studente.php">Registrati come studente</a>
                <a class="d-block small" href="Docente/registrazione_docente.php">Registrati come docente</a>
                <a class="d-block small" href="password_dimenticata.php">Password dimenticata?</a>
            </div>
        </div>
    </div>
</div>
<!-- Bootstrap core JavaScript-->
<script src="../vendor/jquery/jquery.min.js"></script>
<script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Core plugin JavaScript-->

<script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

<script src="../js/login.js"></script>


<script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

</body>

</html>
