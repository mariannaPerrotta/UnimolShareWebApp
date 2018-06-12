document.getElementById("aggiungi_libro").onclick = function () {

    var Matricola = $('#Matricola').val();

    var Titolo = $("#InputTitolo").val();

    var CasaEditrice=$("#InputCasaEditrice").val();

    var Autore = $("#InputAutore").val();

    var Edizione = $("#InputEdizione").val();

    var id_materia = ($('#btnmaterie').find(":selected")).val();



    if((Titolo === "") || (Edizione === "") || (CasaEditrice === "") || (Autore === "") || (id_materia === "")) {
        alert("Riempi tutti i campi obbligatori");
    }
    else {

        newData = {

            titolo: Titolo,

            edizione: Edizione,

            casa_editrice: CasaEditrice,

            cod_docente: Matricola,

            autore: Autore,

            cod_materia: id_materia,

            link: ""

        };

        $.ajax({

            url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/caricalibro",

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