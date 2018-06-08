document.getElementById("aggiungi_annuncio").onclick = function () {

    var Titolo = $("#InputTitolo").val();

    var Autore = $("#InputAutore").val();

    var Edizione = $("#InputEdizione").val();

    var Contatto = $("#InputContatto").val();

    var Prezzo = $("#InputPrezzo").val();

    var CasaEditrice=$("#InputCasaEditrice").val();

    var Cod_Studente=$("#InputStudente").val();

    var Materia = $('#btnmaterie').find(":selected").text();

    var data = {

        materia: Materia

    }



    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzaidpermateria",

        type: 'POST',

        data: data,

        dataType: "json",

        success: function (id_mat) {

            alert(id_mat.id);

            var data = {

                titolo: Titolo,

                contatto: Contatto,

                prezzo: Prezzo,

                edizione: Edizione,

                casa_editrice: CasaEditrice,

                cod_studente: Cod_Studente,

                autore: Autore,

                cod_materia: id_mat

            };

            alert(JSON.stringify(data));

            $.ajax({

                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/caricaannuncio",

                type: 'POST',

                data: data,

                dataType: "json",

                success: function (data) {


                    alert(data.message);


                    if (data.error == false) {
                        alert("Annuncio caricato");
                        //window.location.assign('index.php?action=aggiungiAnnuncio');
                    }

                    console.log(data);

                }

            });
        }
    });
}