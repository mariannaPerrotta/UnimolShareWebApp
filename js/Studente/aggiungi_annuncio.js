document.getElementById("aggiungi_annuncio").onclick = function () {

    var Titolo = $("#InputTitolo").val();

    var Autore = $("#InputAutore").val();

    var Edizione = $("#InputEdizione").val();

    var Contatto = $("#InputContatto").val();

    var Prezzo = $("#InputPrezzo").val();

    var CasaEditrice=$("#InputCasaEditrice").val();

    var Cod_Studente=$("#InputStudente").val();

    var Materia =document.getElementById("btnmaterie").value;


    if((Titolo === "") || (Prezzo === "") || (Edizione === "") || (CasaEditrice === "") || (Autore === "") || (Materia === "")) {
        alert("Riempi tutti i campi obbligatori");
    }
    else {

                newData = {

                    titolo: Titolo,

                    contatto: Contatto,

                    prezzo: Prezzo,

                    edizione: Edizione,

                    casa_editrice: CasaEditrice,

                    cod_studente: Cod_Studente,

                    autore: Autore,

                    cod_materia: Materia

                };


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

            }




};