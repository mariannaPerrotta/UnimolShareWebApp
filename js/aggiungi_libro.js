document.getElementById("btnaggiungilibro").onclick = function () {


    var CodDocente = $("#CodDocente").val();

    var CasaEditrice =$("#CasaEditrice").val();

    var Autore =$("#Autore").val();

    var Edizione =$("#Edizione").val();


    var data = {

        CodDocente: CodDocente,

        CasaEditrice: CasaEditrice,

        Autore: Autore,

        Edizione: Edizione,

    };


    $.ajax({

        url: "http://localhost/UnimolShare/public/Aggiungi_libro ",

        type: 'POST',

        data: data,

        dataType:"json",


        success: function (data) {

            if(data.error==false){
                window.location.assign('index.php')
            }


            console.log(data);

        },


    });
}



