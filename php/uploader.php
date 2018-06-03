<?php
/**
 * Created by PhpStorm.
 * User: Andrea
 * Date: 03/06/18
 * Time: 21:58
 */

/* https://www.mrwebmaster.it/php/upload_6600.html

    // per prima cosa verifico che il file sia stato effettivamente caricato
    if (!isset($_FILES['userfile']) || !is_uploaded_file($_FILES['userfile']['tmp_name'])) {
        echo 'Non hai inviato nessun file...';
        exit;
    }
    //percorso della cartella dove mettere i file caricati dagli utenti
    $uploaddir = 'http://www.unimolshare.altervista.org/file/test';

    //Recupero il percorso temporaneo del file
    $userfile_tmp = $_FILES['userfile']['tmp_name'];

    //recupero il nome originale del file caricato
    $userfile_name = $_FILES['userfile']['name'];

    //copio il file dalla sua posizione temporanea alla mia cartella upload
    if (move_uploaded_file($userfile_tmp, $uploaddir . $userfile_name)) {
        //Se l'operazione è andata a buon fine...
        echo 'File inviato con successo.';
    } else {
        //Se l'operazione è fallta...
        echo 'Upload non valido!';
    }

*/

/* https://www.mattepuffo.com/blog/articolo/567-php-upload-pdf.html */

    $pdfPath = "../FILEPDFTEST/";
    $maxSize = 102400; //MAX 100 MB

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (is_uploaded_file($_FILES['file']['tmp_name'])) {
            if ($_FILES['file']['type'] != "application/pdf") {
                echo 'Il file non è un PDF';
            } else if ($_FILES['file']['size'] > $maxSize) {
                echo 'File troppo grande. Dimensione massima: ' . ($maxSize/1024) . 'MB';
            } else {
                $menuName = 'file.pdf';
                $result = move_uploaded_file($_FILES['file']['tmp_name'], $pdfPath . $menuName);
                if ($result == 1) {
                    echo 'File caricato';
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