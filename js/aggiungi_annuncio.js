document.getElementById("aggiungi_annuncio").onclick = function () {

    var Titolo = $("#InputTitolo").val();


    var Autore = $("#InputAutore").val();


    var Edizione = $("#InputEdizione").val();


    var Contatto = $("#InputContatto").val();


    var Prezzo = $("#InputPrezzo").val();

    var CasaEditrice=$("#InputCasaEditrice").val();

    var data = {

        titolo: Titolo,

        autore: Autore,

        edizione: Edizione,

        contatto: Contatto,

        prezzo: Prezzo,

        casa_editrice : CasaEditrice,

    };

    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/caricaannuncio",

        type: 'POST',

        data: data,

        dataType: "json",

        success: function (data) {

            if (data.error == false) {
                alert("Annuncio caricato");
                window.location.assign('index.php?action=aggiungiAnnuncio');
            }


            console.log(data);

        },


    });
}