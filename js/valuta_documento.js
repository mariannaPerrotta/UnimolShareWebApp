function valuta(id_button, cod_documento) {

    var valutazione = $('#'+id_button).val();

    var data = {
        valutazione: valutazione,
        cod_documento: cod_documento
    };

    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/valutazionedocumento",

        type: 'POST',

        data: data,

        dataType: "json",

        success: function (data) {

            alert(data.message);

        },
        error: function (err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }


    });

}