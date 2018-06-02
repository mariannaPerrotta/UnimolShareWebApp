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
    <div class="card card-register mx-auto mt-5"style=" border-radius: 3%; margin-bottom: auto!important;">
        <div class="card-header">Il mio profilo</div>
    <div class="card-body">
        <form method="POST" style="padding-left: 0.25%">
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
                <label for="nome">Nome: <font color="blue"><?php echo($_SESSION['utente']['nome']) ?></font></label>
            </div>
            <div class="form-group">
                <label for="cognome">Cognome: <font
                            color="blue"><?php echo($_SESSION['utente']['cognome']) ?></font></label>
            </div>
            <div class="form-group">
                <label for="CDL">Corso di Laurea: <font color="blue"></font></label>
            </div>
            <div class="form-group">
                <label for="Email">Email: <font color="blue"><?php echo($_SESSION['utente']['email']) ?> </font></label>
            </div>
            <div form="form-group">
                <div class="form-row">
                    <a class="nav-link nav-link-collapse" data-toggle="collapse"
                       style="padding-top: 0px;padding-right: 10px; padding-left: 0px;" href="#collapseMulti"
                       data-parent="#exampleAccordion" aria-expanded="true">
                        <i class="fa fa-fw fa-arrow-circle-down"></i>
                    </a>
                    <label style="padding-top: 0px;padding-bottom: 15px;" for="exampleInputCodDocente">Materie</label>
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

        </form>
    </div>
</div></div>
<!-- Bootstrap core JavaScript-->
<script src="../../vendor/jquery/jquery.min.js"></script>
<script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Core plugin JavaScript-->

<script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>

<script src="../../js/login.js"></script>


<script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>



</html>
