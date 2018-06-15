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

    <title>UnimolShare</title>

    <!-- Favicon -->
    <link rel="icon" href="">


    <!-- Core Stylesheet -->
    <link href="../../css/cssHome/style.css" rel="stylesheet">

    <!-- Responsive CSS -->
    <link href="../../css/cssHome/responsive.css" rel="stylesheet">

</head>
<body class="fixed-nav sticky-footer bg-dark" id="page-top">
<!-- Navigation-->
<section class="special-area bg-white section_padding_100" style="padding-top: unset" id="about">
    <div class="content-wrapper" style="padding-left:2%; padding-right: 2%">
        <div class="row">
            <div class="col-12">
                <!-- Section Heading Area -->
                <center> <img src="../../img/UnishareBlu.png" height="300" width="350"> </center>
                <div class="section-heading text-center">
                    <h2><font color="#007bff">UnimolShare</font></h2>
                    <div class="line-shape" style="background-color: #17a2b8"></div>
                    <p></p>
                    <br><p><font size="4" color="black">Una piattaforma unica in cui gli studenti possono condividere e scaricare documenti di altri studenti<br>
                            o docenti, e questi ultimi possono caricare il materiale ufficiale dei corsi.</font></p>
                </div>
            </div>
        </div>

        <div class="row justify-content-md-center">
            <!-- Single Special Area -->
            <div class="col-12 col-md-4"">
                <div button class="single-special text-center wow fadeInUp" data-wow-delay="0.2s" onclick="window.location.assign('index_doc.php?action=documenti_caricati_doc');"</button>
                    <div class="single-icon">
                        <i class="fa fa-fw fa-file" aria-hidden="true" style="color: #17a2b8"></i>
                    </div>
                    <h4><font color="#007bff">Documenti caricati</font></h4>
                    <a style="color:black">Clicca qui per visualizzare i documenti caricati</a>
                    <p></p>
                </div>
            </div>
            <!-- Single Special Area -->
            <div class="col-12 col-md-4">
                <div button class="single-special text-center wow fadeInUp" data-wow-delay="0.6s" onclick="window.open('https://unimol.esse3.cineca.it/Home.do');"</button>
                    <div class="single-icon">
                        <i class="fa fa-fw fa-users" aria-hidden="true" style="color: #17a2b8"></i>
                    </div>
                    <h4><font color="#007bff">Portale del docente</font></h4>
                    <a style="color:black">Clicca qui per essere reindirizzato al portale</a>
                    </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
    <!-- ***** Our Team Area Start ***** -->
    <section class="our-Team-area bg-white section_padding_100_50 clearfix" style="padding-top: unset" id="team">
        <div class="content-wrapper" style="padding-left:2%; padding-right: 2%">
            <div class="row">
                <div class="col-12 text-center">
                    <!-- Heading Text  -->
                    <div class="section-heading">
                        <h2><font color="#007bff">Team di sviluppo</font></h2>
                        <div class="line-shape" style="background-color: #17a2b8"></div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-12 col-md-6 col-lg-2">
                    <div class="single-team-member">
                        <div class="member-image">
                            <img src="../../img/team-img/francesco.jpeg" alt="">
                            <div class="team-hover-effects">
                                <div class="team-social-icon">
                                    <a href="https://www.facebook.com/francesco.ranieri.796" target=”_blank”><i class="fa fa-facebook" style="margin-top: 30%" aria-hidden="true"></i></a>
                                    <a href="https://github.com/franciu97" target=”_blank”><i class="fa fa-github-square" style="margin-top: 30%" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="member-text">
                            <h4><font color="#007bff">Francesco<br>Ranieri</font></h4>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-2">
                    <div class="single-team-member">
                        <div class="member-image">
                            <img src="../../img/team-img/danilo.jpeg" alt="">
                            <div class="team-hover-effects">
                                <div class="team-social-icon">
                                    <a href="https://www.facebook.com/danilo.sprovieri" target=”_blank”><i class="fa fa-facebook" style="margin-top: 30%" aria-hidden="true"></i></a>
                                    <a href="https://github.com/Dani2097" target=”_blank”><i class="fa fa-github-square" style="margin-top: 30%" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="member-text">
                            <h4><font color="#007bff">Danilo<br>Sprovieri</font></h4>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-2">
                    <div class="single-team-member">
                        <div class="member-image">
                            <img src="../../img/team-img/jonathan.jpeg" alt="">
                            <div class="team-hover-effects">
                                <div class="team-social-icon">
                                    <a href="https://www.facebook.com/jonathan.drini.7" target=”_blank”><i class="fa fa-facebook" style="margin-top: 30%" aria-hidden="true"></i></a>
                                    <a href="https://github.com/MrJo1996" target=”_blank”><i class="fa fa-github-square" style="margin-top: 30%" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="member-text">
                            <h4><font color="#007bff">Jonathan<br>Drini</font></h4>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-2">
                    <div class="single-team-member">
                        <div class="member-image">
                            <img src="../../img/team-img/pierluigi.jpeg" alt="">
                            <div class="team-hover-effects">
                                <div class="team-social-icon">
                                    <a href="https://www.facebook.com/profile.php?id=100007936870644" target=”_blank”><i class="fa fa-facebook" style="margin-top: 30%" aria-hidden="true"></i></a>
                                    <a href="https://github.com/RedGii" target=”_blank”><i class="fa fa-github-square" style="margin-top: 30%" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="member-text">
                            <h4><font color="#007bff">Pierluigi<br>Cosco</font></h4>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-2">
                    <div class="single-team-member">
                        <div class="member-image">
                            <img src="../../img/team-img/dorothea.jpeg" alt="">
                            <div class="team-hover-effects">
                                <div class="team-social-icon">
                                    <a href="https://www.facebook.com/LaDoroo" target=”_blank”><i class="fa fa-facebook" style="margin-top: 30%" aria-hidden="true"></i></a>
                                    <a href="https://github.com/Dorothea96" target=”_blank”><i class="fa fa-github-square" style="margin-top: 30%" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="member-text">
                            <h4><font color="#007bff">Dorothea<br>Messina</font></h4>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-12 col-md-6 col-lg-2">
                    <div class="single-team-member">
                        <div class="member-image">
                            <img src="../../img/team-img/michela.jpeg" alt="">
                            <div class="team-hover-effects">
                                <div class="team-social-icon">
                                    <a href="https://www.facebook.com/mikela.patullo" target=”_blank”><i class="fa fa-facebook" style="margin-top: 30%" aria-hidden="true"></i></a>
                                    <a href="https://github.com/mikela-96" target=”_blank”><i class="fa fa-github-square" style="margin-top: 30%" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="member-text">
                            <h4><font color="#007bff">Michela<br>Patullo</font></h4>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-2">
                    <div class="single-team-member">
                        <div class="member-image">
                            <img src="../../img/team-img/andrea.jpg" alt="">
                            <div class="team-hover-effects">
                                <div class="team-social-icon">
                                    <a href="https://www.facebook.com/andrea.petrella.5" target=”_blank”><i class="fa fa-facebook" style="margin-top: 30%" aria-hidden="true"></i></a>
                                    <a href="https://github.com/andreacb94" target=”_blank”><i class="fa fa-github-square" style="margin-top: 30%" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="member-text">
                            <h4><font color="#007bff">Andrea<br>Petrella</font></h4>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-2">
                    <div class="single-team-member">
                        <div class="member-image">
                            <img src="../../img/team-img/domenico.jpeg" alt="">
                            <div class="team-hover-effects">
                                <div class="team-social-icon">
                                    <a href="https://www.facebook.com/domenico.romano.5" target=”_blank”><i class="fa fa-facebook" style="margin-top: 30%" aria-hidden="true"></i></a>
                                    <a href="https://github.com/asertoPasso" target=”_blank”><i class="fa fa-github-square" style="margin-top: 30%" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="member-text">
                            <h4><font color="#007bff">Domenico<br>Romano</font></h4>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-2">
                    <div class="single-team-member">
                        <div class="member-image">
                            <img src="../../img/team-img/marianna.jpeg" alt="">
                            <div class="team-hover-effects">
                                <div class="team-social-icon">
                                    <a href="https://www.facebook.com/marianna.perrotta1" target=”_blank”><i class="fa fa-facebook" style="margin-top: 30%" aria-hidden="true"></i></a>
                                    <a href="https://github.com/mariannaPerrotta" target=”_blank”><i class="fa fa-github-square" style="margin-top: 30%" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="member-text">
                            <h4><font color="#007bff">Marianna<br>Perrotta</font></h4>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-2">
                    <div class="single-team-member">
                        <div class="member-image">
                            <img src="../../img/team-img/chiara.jpeg" alt="">
                            <div class="team-hover-effects">
                                <div class="team-social-icon">
                                    <a href="https://www.facebook.com/chiara.ricciardi.10" target=”_blank”><i class="fa fa-facebook" style="margin-top: 30%" aria-hidden="true"></i></a>
                                    <a href="https://github.com/cricciardi" target=”_blank”><i class="fa fa-github-square" style="margin-top: 30%" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="member-text">
                            <h4><font color="#007bff">Chiara<br>Ricciardi</font></h4>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    <!-- /.content-wrapper-->
    <footer class="sticky-footer">
        <div class="container">
            <div class="text-center">
                <small>Copyright © UnimolShare 2018</small>
            </div>
        </div>
    </footer>

<!-- Bootstrap core JavaScript-->
<script src="../../vendor/jquery/jquery.min.js"></script>
<script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Core plugin JavaScript-->
<script src="../../js/download.js"></script>
<script src="../../js/rimuovi_documento.js"></script>
<script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>



</body>

</html>
