$(document).ready(function() {
    $.ajax({
        url: "/../../pages/utente.php",

        type: 'POST',

        data: {matricola: null},

        dataType: "html",

        success: function (data) {
            var matricola = data;
            $.ajax({

                    url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzacdlperidstudente",

                    type: 'POST',

                    data: {matricola: matricola},

                    dataType: "json",

                    success: function (data) {

                        if (data.CDL.error == false) {



                            var cdl = {
                                id: data.CDL.id,
                                nome: data.CDL.nome,
                            }

                            $('#idCdL').append(' <label for="CDL" id="idCdL">Corso di Laurea:'+' '+'cdl.nome</label>');

                        }
                        $.ajax({
                           url: "../pages/session.php",

                            type: 'POST',

                            data: {cdl: cdl.id},

                            dataType: "html",

                            success: function (data) {

                            }
                        })
                    }

            })
        },
                error: function (err) {

                    alert("NO " + err.responseJSON.toString());

                    console.log(err.responseJSON);


                }


            });



})
