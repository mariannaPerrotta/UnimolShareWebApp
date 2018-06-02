
$(document).ready(function() {

    $.ajax({
        url: "http://localhost/UnimolShareWebApp/pages/utente.php",

        type: 'POST',

        data: {matricola: null},

        dataType: "html",

        success: function (data) {
            var matricola = data;
            $.ajax({

                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzadocumentoperid",

                type: 'POST',

                data: {matricola: matricola},

                dataType: "json",

                success: function (data) {

                    if (data.documenti.error == false) {

                        var n = data.documenti.contatore;
                        var documenti = [];
                        for (var i = 0; i < n; i++) {

                            var documento = {
                                titolo: data.documenti[i].titolo,
                                link: data.documenti[i].link,
                            }

                            documenti.push(documento);

                            $('#card_documenti_caricati').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">' +
                                '                                    <div class="card-body">' +
                                '                                    <form method="POST" style="padding-left: 0.25%">' +
                                '                                    <a class="btn btn-primary btn-block ml-auto" style="padding-left: 0%;color:white;width: 30%" id="btnrimuovidocumento">' +
                                '                                    <i class="fa fa-fw fa-minus-circle"></i>' +
                                '                                    <label for="rimuovidocumento" style="padding-left: auto">Rimuovi</label>' +
                                '                                    </a>' +
                                '                                    <div class="form-group mt-4">' +
                                '                                    <label for="titolodocumento">Titolo documento:' + ' '+ documenti[i].titolo + '</label>' +
                                '                                </div>' +
                                '                                <div class="form-group">' +
                                '                                    <label for="materiadocumento">Materia:</label>' +
                                '                                </div>' +
                                '                                <a class="btn btn-primary btn-block" style="color:white" id="btnvisualizzadocumento">Download documento</a>' +
                                '\n' +
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