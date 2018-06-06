
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>UnimolShare - documenti</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>

<div class="content-wrapper" style="background: unset; padding-left:2%; padding-right: 2%">
    <!--//fare for per visualizzare 1 carta per ogni documento con chiamata php-->
            <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">
                <div class="card-body">
                    <form method="POST" style="padding-left: 0.25%">
                <div class="form-group mt-4">
                    <label for="titolodocumento">Titolo documento:</label>
                </div>
                <div class="form-group">
                    <label for="materiadocumento">Materia:</label>
                </div>
                <div form="form-group">
                    <div class="form-row">
                        <label style="padding-bottom: 15px;padding-right: 2%" for="Valutazione">Valutazione</label>
                        <select name="Valutazione" id="Valutazione" style="height: 27px; border-top-width: 1px;">
                            <option value="1"> ★ </option>
                            <option value="2"> ★★ </option>
                            <option value="3"> ★★★ </option>
                            <option value="4"> ★★★★ </option>
                            <option value="5"> ★★★★★ </option>
                        </select>
                    </div>
                </div>
                <a class="btn btn-primary btn-block" style="color:white" id="btnvisualizzadocumento">Download documento</a>

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
