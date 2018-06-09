<?php
/**
 * Created by PhpStorm.
 * User: Andrea
 * Date: 03/06/18
 * Time: 21:58
 */
    require "FtpUploader.php";

    //Indirizzo
    $pdfPath = "../FILETMP/";
    $maxSize = 102400; //MAX 100 MB

    //Controlli sul file
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (is_uploaded_file($_FILES['file']['tmp_name'])) {
            if ($_FILES['file']['type'] != "application/pdf") {
                echo 'Il file non è un PDF';
            } else if (($_FILES['file']['size']/1024) > $maxSize) {
                echo ('File troppo grande. Dimensione massima: ' . ($maxSize/1024) . 'MB');
            } else {
                //Se il file è corretto lo carico in una cartella locale temporanea
                $fileName = $_POST['titolo'];
                $result = move_uploaded_file($_FILES['file']['tmp_name'], $pdfPath . $fileName);
                if ($result == 1) {

                    //Se è andato a buon fine carico il file online
                    $cod_doc = $_POST['cod_doc'];
                    $cod_stud = $_POST['cod_stud'];
                    $cod_mat = $_POST['cod_mat'];

                    //Trasferisco il file nel server del backend
                    $ftp = new FtpUploader();
                    echo ($ftp->upload($fileName, $cod_doc, $cod_stud, $cod_mat));

                } else {
                    echo 'Si è verficato un errore';
                }
            }
        }
        else{
            echo "File non inviato";
        }
    }
    else{
        echo "Nessun file caricato";
    }

?>