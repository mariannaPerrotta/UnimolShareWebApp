document.getElementById("btnsegnalaprofilo").onclick = function () {

    var nome = $("#InputNome").val();

    var cognome = $("#InputCognome").val();

    var motivo = $("#InputMotivo").val();

    var contatto = $("#InputContatto").val();

    var email = $("#InputEmail").val();


    var data = {

        Nome: nome,

        Cognome: cognome,

        Motivo: motivo,

        Contatto: contatto,

        Email: email,

    };


    $.ajax({

        url: "http://unimolshare.altervista.org/logic/UnimolShare/public/index.php/segnalazione",

        type: 'POST',

        data: data,

        dataType: "json",

        success: function (data) {

            if (data.error == false) {
                window.location.assign('index.php')
            }

            console.log(data);

        },

    });
}