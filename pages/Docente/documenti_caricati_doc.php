<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>UnimolShare - I tuoi documenti</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>

<body class="container bg-dark" style="padding-top: unset">
<!--//fare for per visualizzare 1 carta per ogni documento con chiamata php-->
<div class="card mt-3 col-md-4" style="border-color: #007bff; border-radius: 3%" >
    <div class="card-body">
        <form method="POST" style="padding-left: 0.25%">
            <a class="btn btn-primary btn-block ml-auto" style="padding-left: 0%;color:white;width: 30%" id="btnrimuovidocumento">
                <i class="fa fa-fw fa-minus-circle"></i>
                <label for="rimuovidocumento" style="padding-left: auto">Rimuovi</label>
            </a>
            <div class="form-group mt-4">
                <label for="titolodocumento">Titolo documento:</label>
            </div>
            <div class="form-group">
                <label for="materiadocumento">Materia:</label>
            </div>
            <a class="btn btn-primary btn-block" style="color:white" id="btnvisualizzadocumento">Download documento</a>

        </form>
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
