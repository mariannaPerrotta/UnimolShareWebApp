<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>UnimolShare -Lista annunci</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>

<div class="content-wrapper" style="background: unset; padding-left:2%; padding-right: 2%">
    <!--//fare for per visualizzare 1 carta per ogni annuncio con chiamata php-->
    <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">
        <div class="card-body">
            <form method="POST" style="padding-left: 0.25%">
                <div class="form-group mt-4">
                    <label for="titoloannuncio">Titolo:</label>
                </div>
                <div class="form-group">
                    <label for="autoreannuncio">Autore:</label>
                </div>
                <div class="form-group">
                    <label for="corsodistudioannuncio">Corso di studio:</label>
                </div>
                <div class="form-group">
                    <label for="materiaannuncio">Materia:</label>
                </div>
                <div class="form-group">
                    <label for="prezzoannuncio">Prezzo:</label>
                </div>
                <div class = "form-group">
                    <div class = "form-row" style="margin-right: 25px; margin-left: 25px;">
                        <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal" style="color: white">Contatta Venditore</a>
                    </div>
                </div>
                <!-- Scroll to Top Button-->
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fa fa-angle-up"></i>
                </a>
                <!-- Logout Modal-->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Contatti</h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">Email: </div>
                            <div class="modal-body">Telefono: </div>
                            <div class="modal-footer">
                                <button class="btn btn-secondary" type="button" data-dismiss="modal" >Indietro</button>
                            </div>
                        </div>
                    </div>
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


</html>
