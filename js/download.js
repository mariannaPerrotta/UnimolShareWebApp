function Download(id) {

    $.ajax({
        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/downloadDocumento",

        type: 'POST',

        data: {id: id},

        dataType: "json",

        success: function (data) {

            if (JSON.stringify(data.error) === 'false') {
                link = (data.link[0].id);
                if(link !=null) {
                    window.open(
                        link,
                        '_blank'
                    );
                }
                else{
                    alert("Download non disponibile");
                }

            } else {
                alert("Errore rimozione");
            }
        }
    })
}