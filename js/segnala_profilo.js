document.getElementById("btnsegnalaprofilo").onclick = function () {

    var nome = $("#InputNome").val();

    var cognome = $("#InputCognome").val();

    var motivo = $("#InputMotivo").val();

    var contatto = $("#InputContatto").val();

    var email = $("#InputEmail").val();


    var data = {

        nome: nome,

        cognome: cognome,

        motivo: motivo,

        contatto: contatto,

        email: email,

    };


    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/segnalazione",

        type: 'POST',

        data: data,



        success: function (data) {

            if (data.error == false) {
                window.location.assign('index.php')
            }

            console.log(data);

        },

    });
}