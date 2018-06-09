<?php
if (($_SESSION['utente']['tipo'])!= "studente") {

    header("location: ../login.php");
}
?>
<html lang ="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>UnimolShare</title>
    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/c.css" rel="stylesheet">
</head>


<body class="fixed-nav sticky-footer bg-dark" style="padding-top: unset" id="page-top">
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav" >
    <a class="navbar-brand" href="index.php">UnimolShare</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">

        <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">

            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Home">
                <a class="nav-link" href="index.php?action=home">
                    <i class="fa fa-fw fa-home"></i>
                    <span class="nav-link-text">Home</span>
                </a>
            </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Profilo">
          <a class="nav-link" href="index.php?action=profilo">
            <i class="fa fa-fw fa-user-circle-o"></i>
            <span class="nav-link-text">Profilo</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Libri consigliati">
          <a class="nav-link"  href="index.php?action=visualizza_materie">
            <i class="fa fa-fw fa-book"></i>
            <span class="nav-link-text">Libri consigliati</span>
          </a>
        </li>

        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Documenti">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti" data-parent="#exampleAccordion">
            <i class="fa fa-fw fa-file"></i>
            <span class="nav-link-text">Documenti</span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseMulti">
            <li>
              <a href="index.php?action=documentoStudente">Aggiungi documento</a>
            </li>
            <li>
              <a href="index.php?action=documenti_caricati" >Documenti caricati</a>
            </li>
            <li>
              <a href="index.php?action=lista_documenti">Lista documenti</a>
            </li>
          </ul>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Annunci">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti2" data-parent="#exampleAccordion">
            <i class="fa fa-fw fa-paper-plane"></i>
            <span class="nav-link-text">Annunci</span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseMulti2">
            <li>
                <a href="index.php?action=aggiungiAnnuncio">Aggiungi annuncio</a>
            </li>
            <li>
                <a href="index.php?action=annunciCaricati">Annunci caricati</a>
            </li>
            <li>
              <a href="index.php?action=lista_annunci">Lista annunci</a>
            </li>
            </ul>
        </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Segnala profilo">
                <a class="nav-link"  href="index.php?action=segnala_profilo">
                    <i class="fa fa-fw fa-ban"></i>
                    <span class="nav-link-text">Segnala profilo</span>
                </a>
            </li>

      </ul>
      <ul class="navbar-nav sidenav-toggler">
        <li class="nav-item">
          <a class="nav-link text-center" id="sidenavToggler">
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
<!--        <li class="nav-item">-->
<!--          <form class="form-inline my-2 my-lg-0 mr-lg-2">-->
<!--            <div class="input-group">-->
<!--              <input class="form-control" id="InputRicerca" type="text" placeholder="Ricerca">-->
<!--              <span class="input-group-append" >-->
<!--                <button class="btn btn-primary" id="idRicerca" type="button" href="index.php?action=ricerca_1"  onclick="ricerca('InputRicerca')">-->
<!--                  <i class="fa fa-search"></i>-->
<!--                </button>-->
<!--              </span>-->
<!--            </div>-->
<!--          </form>-->
<!--        </li>-->
          <li class="nav-item">
              <a class="nav-link" data-toggle="modal" data-target="#exampleModal" >
                  <i class="fa fa-fw fa-sign-out"  ></i>Logout</a>
          </li>

      </ul>


  </nav>
  <div class="content-wrapper bg-dark">

      <!-- Scroll to Top Button-->
      <a class="scroll-to-top rounded" href="#page-top" style="z-index: 2147483647;" >
          <i class="fa fa-angle-up" ></i>
      </a>
      <!-- Logout Modal-->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Sicuro di voler uscire?</h5>
                      <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                      </button>
                  </div>
                  <div class="modal-body">Seleziona "Logout" se sei pronto a terminare la sessione corrente.</div>
                  <div class="modal-footer">
                      <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancella</button>
                      <a class="btn btn-primary" href="../logout.php">Logout</a>
                  </div>
              </div>
          </div>
      </div>
  </div>


  <!-- Bootstrap core JavaScript-->
  <script src="../../vendor/jquery/jquery.min.js"></script>
  <script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- Core plugin JavaScript-->

  <script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>

  <script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>


    <!-- Custom scripts for this page-->
    <!-- Toggle between fixed and static navbar-->
    <script>
    $('#toggleNavPosition').click(function() {
      $('body').toggleClass('fixed-nav');
      $('nav').toggleClass('fixed-top static-top');
    });

    </script>
    <!-- Toggle between dark and light navbar-->
    <script>
    $('#toggleNavColor').click(function() {
      $('nav').toggleClass('navbar-dark navbar-light');
      $('nav').toggleClass('bg-dark bg-light');
      $('body').toggleClass('bg-dark bg-light');
    });

    </script>

</body>

</html>
