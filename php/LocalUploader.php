<?php
/**
 * Created by PhpStorm.
 * User: Andrea
 * Date: 03/06/18
 * Time: 21:58
 */
    require "FtpUploader.php";
    require "CurlFtpUploader.php";

    //Indirizzo
    $pdfPath = "../FILETMP/";
    $pdfExternalPath = "/FILETMP/";
    $maxSize = 102400; //MAX 100 MB

    $http_server = "http://unimolsharewebapp.altervista.org";

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

                //Automatic rename file if it exist
                $i = 0;
                $fileNameOld = $fileName;
                do {
                    if($i > 0)
                        $fileName = $fileNameOld."_".$i;
                    $i++;
                }// Test if file is in the ftp_nlist array
                while (in_array($fileName.".pdf", scandir($pdfPath)));

                $result = move_uploaded_file($_FILES['file']['tmp_name'], $pdfPath . $fileName.".pdf");
                if ($result == 1) {

                    //Se è andato a buon fine carico il file online
                    $cod_doc = $_POST['cod_doc'];
                    $cod_stud = $_POST['cod_stud'];
                    $cod_mat = $_POST['cod_mat'];

                    $link = $http_server . $pdfExternalPath . $fileName.".pdf";
                    //Aggiorno il link nel db tramite servizio REST
                    $urlRest = 'http://unimolshare.altervista.org/logic/UnimolShare/public/index.php/caricadocumento';
                    if ($cod_doc !== "") {
                        $data = array(
                            'titolo' => $fileName,
                            'codice_docente' => $cod_doc,
                            'codice_materia' => $cod_mat,
                            'link' => $link
                        );
                    } else {
                        $data = array(
                            'titolo' => $fileName,
                            'codice_studente' => $cod_stud,
                            'codice_materia' => $cod_mat,
                            'link' => $link
                        );
                    }

                    $options = array(
                        'http' => array(
                            'method' => 'POST',
                            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                            'content' => http_build_query($data)
                        )
                    );
                    $context = stream_context_create($options);
                    $response = file_get_contents($urlRest, false, $context);

                    if ((json_decode($response))->{'error'}) {
                        $response = "Si è verificato un errore durante l'aggiornamento del DB!";
                    } else {
                        $response = (json_decode($response))->{'message'};
                    }

                    echo $response;

                    //Trasferisco il file nel server del backend
                    //$ftp = new FtpUploader();
                    //echo($ftp->upload($fileName, $cod_doc, $cod_stud, $cod_mat));

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