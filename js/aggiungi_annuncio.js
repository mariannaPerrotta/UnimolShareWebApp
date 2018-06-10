document.getElementById("aggiungi_annuncio").onclick = function () {

    var Titolo = $("#InputTitolo").val();

    var Autore = $("#InputAutore").val();

    var Edizione = $("#InputEdizione").val();

    var Contatto = $("#InputContatto").val();

    var Prezzo = $("#InputPrezzo").val();

    var CasaEditrice=$("#InputCasaEditrice").val();

    var Cod_Studente=$("#InputStudente").val();

    var Materia = $('#btnmaterie').find(":selected").text();

    var tmp = "";
    for(var i = 0; i < Materia.length; i++) {
        var current = Materia[i];
        if(current !== ' ') {
            // Check the element has no children && that it is not empty
            tmp = tmp + current;
        }
    }
    Materia = tmp;

    var data = {

        materia: Materia

    };

    if((Titolo === "") || (Prezzo === "") || (Edizione === "") || (CasaEditrice === "") || (Autore === "") || (Materia === "")) {
        alert("Riempi tutti i campi obbligatori");
    }
    else {

        $.ajax({

            url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzaidmateriapernome",

            type: 'POST',

            data: data,

            dataType: "json",

            success: function (data) {

                var id = data.id[0].id;

                newData = {

                    titolo: Titolo,

                    contatto: Contatto,

                    prezzo: Prezzo,

                    edizione: Edizione,

                    casa_editrice: CasaEditrice,

                    cod_studente: Cod_Studente,

                    autore: Autore,

                    cod_materia: id

                };

                if (!data.error) {

                    $.ajax({

                        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/caricaannuncio",

                        type: 'POST',

                        data: newData,

                        dataType: "json",

                        success: function (data) {

                            alert(data.message);
                            console.log(data);
                        },

                        error: function (err) {

                            alert("NO " + err.responseJSON.toString());
                            console.log(err.responseJSON);
                        }

                    });
                } else {
                    alert(data.message);
                }
            },

            error: function (err) {

                alert("NO " + err.responseJSON.toString());
                console.log(err.responseJSON);
            }
        });
    }

};