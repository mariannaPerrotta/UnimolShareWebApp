<?php
/**
 * Created by PhpStorm.
 * User: Andrea
 * Date: 04/06/18
 * Time: 21:36
 */

class FtpUploader
{
    /**
     * FtpUploader constructor.
     */
    public function __construct()
    {
    }

    public function upload($fileName, $cod_doc, $cod_stud, $cod_mat) {

        //Configurazione ftp del server backend
        $ftp_server="ftp.unimolshare.altervista.org";
        $ftp_username="unimolshare";
        $ftp_password="FAq3EG9G3ufj";
        //Indirizzi
        $ftpFolder = "/file/test/";
        $localFolder = "../FILEPDFTEST/";
        $response = "";

        // stabilisco la connessione al server ftp
        $ftp_connessione = ftp_connect($ftp_server);
        // effetto login sul server
        $login = ftp_login($ftp_connessione, $ftp_username, $ftp_password);


        // controllo se la connessione ha avuto buon fine
        if(!$ftp_connessione || !$login){
            $response = "Connessione fallita!";
        } else {
            // se connessione ha avuto buon fine faccio UPLOAD del file nel Server
            $file_da_caricare = $localFolder.$fileName;
            $link = $ftpFolder.$fileName;

            $upload = ftp_put($ftp_connessione, $link, $file_da_caricare, FTP_BINARY);

            // controllo se upload andato a buon fine
            if (!$upload) {
                $response = "Si è verificato un errore durante il caricamento!";
            } else {

                //Aggiorno il link nel db tramite servizio REST
                $urlRest = 'http://unimolshare.altervista.org/logic/UnimolShare/public/index.php/caricadocumento';
                if($cod_doc !== "") {
                    $data = array(
                        'titolo' => $fileName,
                        'codice_docente' => $cod_doc,
                        'codice_materia' => $cod_mat,
                        'link' => $link
                    );
                } else{
                    $data = array(
                        'titolo' => $fileName,
                        'codice_studente' => $cod_stud,
                        'codice_materia' => $cod_mat,
                        'link' => $link
                    );
                }

                $options = array(
                    'http' => array(
                        'method'  => 'POST',
                        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                        'content' => http_build_query($data)
                    )
                );
                $context  = stream_context_create($options);
                $response = file_get_contents($urlRest, false, $context);

                if((json_decode($response))->{'error'}){
                    $response = "Si è verificato un errore durante l'aggiornamento del DB!";
                } else {
                    $response = (json_decode($response))->{'message'};
                }

            }

            /*
            //se invece voglio effettuare un DOWNLOAD:
            $file_da_scaricare = $ftpFolder.$fileName;
            $dove_scaricare = $ftpFolder.$fileName;

            $download = ftp_get($ftp_connessione, $dove_scaricare, $file_da_scaricare, FTP_BINARY);

            // controllo se download andato a buon fine
            if (!$download) {
                echo "Si è verificato un errore durante il download!<br>";
            } else {
                echo "Download avvenuto con successo<br>";
            }

            */

            // chiudo connessione FTP
            ftp_quit($ftp_connessione);

            return $response;

        }
    }
}