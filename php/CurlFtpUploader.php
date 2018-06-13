<?php
/**
 * Created by PhpStorm.
 * User: Andrea
 * Date: 13/06/18
 * Time: 01:53
 */

class CurlFtpUploader
{
    public function __construct()
    {
    }

    public function upload($fileName, $cod_doc, $cod_stud, $cod_mat)
    {

        //Configurazione ftp del server backend
        $http_server = "http://unimolshare.altervista.org";
        $ftp_server = "ftp.unimolshare.altervista.org";
        $ftp_username = "unimolshare";
        $ftp_password = "FAq3EG9G3ufj";
        //Indirizzi
        $ftpFolder = "/file/documents/";
        $localFolder = "../FILETMP/";
        $response = "";
        //$linkFtp = 'ftp://' . $ftp_username . ':' . $ftp_password . '@' . $ftp_server . $ftpFolder . $fileName;
        $linkHttp = $http_server . $ftp_username . ':' . $ftp_password . '@' . $ftp_server . $ftpFolder . $fileName;

        $ch = curl_init();
        $localfile = $localFolder . $fileName;
        $fp = fopen($localfile, 'r');
        curl_setopt($ch, CURLOPT_URL, $linkHttp);
        curl_setopt($ch, CURLOPT_UPLOAD, 1);
        curl_setopt($ch, CURLOPT_INFILE, $fp);
        curl_setopt($ch, CURLOPT_INFILESIZE, filesize($localfile));
        curl_exec($ch);
        $error = curl_error($ch);
        $error_no = curl_errno($ch);
        curl_close($ch);
        if ($error_no == 0) {

            $link = $http_server . $ftpFolder . $fileName . ".pdf";
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

        } else {
            $response = 'Errore durantante il caricamento del file: '.$error;
        }

        return $response;
    }


}