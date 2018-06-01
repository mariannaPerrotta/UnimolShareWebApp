document.getElementById("btnAggiungi_annuncio").onclick= function () {

    var titolo = $("#InputTitolo").val();



    var Autore = $("#InputAutore").val();



    var CorsoDiStudio= $("#InputCorsoDiStudio").val();



    var Materia =$("#InputMateria").val();



    var ContattoTelefonico =$("#InputContattoTelefonico").val();



    var Prezzo =$("#InputPrezzo").val();




    var data = {

        Titolo: Titolo,


        Autore: Autore,


        CorsoDiStudio: CorsoDiStudio,


        Materia: Materia,


        ContattoTelefonico: ContattoTelefonico,


        Prezzo: Prezzo,



    };

    $.ajax({

        url: "http://localhost/UnimolShare/public/index.php/Aggiungi_annuncio",

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