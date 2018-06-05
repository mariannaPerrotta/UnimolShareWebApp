$(document).ready(function() {

    $.ajax({
        url: "http://localhost/UnimolShareWebApp/pages/utente.php",

        type: 'POST',

        data: {cdl: null},

        dataType: "html",

        success: function (data) {
            var cdl = 1;
            $.ajax({

                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzamateriapercdl",

                type: 'POST',

                data: {cdl: cdl},

                dataType: "json",

                success: function (data) {

                    if (data.nomi_materie.error == false) {

                        var n = data.nomi_materie.contatore;
                        var array = [];
                        for (var i = 0; i < n; i++) {

                            var materia = {
                                nome: data.nomi_materie[i].nome,

                            }

                            array.push(materia);

                            $('#card_materie').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">' +
                                '                                    <div class="card-body">' +
                                '                                    <form method="POST" style="padding-left: 0.25%">' +
                                '                                    <div class="form-group mt-4">' +
                                '                                    <label for="titololibro">' + ' '+ data.array[i].nome + '</label>' +

                                /*AGGIUNGERE CDL - MATERIA - NOME DOCENTE*/
                                '                                </div>' +
                                '                                </div>' +
                                '                                </form>' +
                                '                                </div>' +
                                '                                </div>' +
                                '                            }');



                        }
                    }




                },
                error: function (err) {

                    alert("NO " + err.responseJSON.toString());

                    console.log(err.responseJSON);


                }


            });

        }

    });

})