function valuta(id_button) {

    var valutazione = document.getElementById(id_button+"id_button").value;

    function matricola(){
        var matricola_stud;
        $.ajax({

            url: "../../pages/matricola.php",

            type: 'POST',

            data: {matr: null},

            dataType: "html",

            async: false,


            success: function (data) {
               matricola_stud= data;


            },
            error: function (err) {

                alert("NO " + err.responseJSON.toString());

                console.log(err.responseJSON);


            }


        }
        );

        return matricola_stud;
    }

    var matricola= matricola();


    var data = {
        valutazione: valutazione,
        cod_documento: id_button,
        cod_studente:matricola,
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