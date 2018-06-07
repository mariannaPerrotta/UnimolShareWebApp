
function Download(id) {

    $.ajax({
        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/downloadDocumento",

        type: 'POST',

        data: {id:id},

        dataType: "json",

        success: function (data) {

            if(JSON.stringify(data.error)==='false'){
                var card=id+"_card";

                $('#card').append('  <a link="'+data.link+'">'+data.link+'</a>'

                );


            }
            if(data.error=="true"){
                alert("Errore rimozione");
            }


        }
    })

}