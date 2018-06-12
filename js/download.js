function Download(id) {
    $.ajax({
        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/downloadDocumento",

        type: 'POST',

        data: {id: id},

        dataType: "json",

        success: function (data) {

            if (JSON.stringify(data.error) === 'false') {
                var card = id;
                if(data.link[0].id!=null) {
                    window.open(
                        data.link[0].id,
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