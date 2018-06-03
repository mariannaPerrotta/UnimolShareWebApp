
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>UnimolShare - I tuoi annunci</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>

<div class="content-wrapper" style="background: unset; padding-left:2%; padding-right: 2%">
    <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">
        <div class="card-header">Aggiungi documento Studente</div>
        <div class="card-body">
            <form id="form-demo" onsubmit="return false">
                <input type="file" id="file" name="file"><br><br>
                <button id="button-send">Send</button>
            </form>
            <script>
                document.getElementById("button-send").onclick = function () {

                    var formData = new FormData($("#form-demo").get(0));
                    var urlUploder = "../../php/uploader.php";

                    $.ajax({

                        url: urlUploder,
                        type: "POST",
                        data: formData,
                        contentType: false,
                        processData: false,

                        success: function (data) {

                            alert(data);

                        },


                    });
                }
            </script>
        </div>
    </div>

</html>
