document.getElementById("aggiungi_annuncio").onclick= function () {

    var Titolo = $("#exampleInputTitolo").val();



    var Autore = $("#exampleInputAutore").val();



    var CorsoDiStudio= $("#exampleInputCorsoDiStudio").val();






    var ContattoTelefonico =$("#exampleInputContattoTelefonico").val();



    var Prezzo =$("#exampleInputPrezzo").val();




    var data = {

        Titolo: Titolo,


        Autore: Autore,


        CorsoDiStudio: CorsoDiStudio,

        ContattoTelefonico: ContattoTelefonico,


        Prezzo: Prezzo,



    };

    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/caricaannuncio",

        type: 'POST',

        data: data,

        dataType:"json",

        success: function (data) {

            if(data.error==false){
                alert("Annuncio caricato");
                window.location.assign('index.php?action=aggiungiAnnuncio');
            }


            console.log(data);

        },


    });
}