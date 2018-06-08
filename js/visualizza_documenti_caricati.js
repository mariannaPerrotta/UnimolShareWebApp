$(document).ready(function() {
    $.ajax({
        url: "../../pages/matricola.php",

        type: 'POST',

        data: {matr: null},

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
                                id: data.documenti[i].id,
                            }

                            documenti.push(documento);

                            $('#card_documenti_caricati').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">' +
                                '                                    <div class="card-body"  >' +
                                '                                    <form method="POST" style="padding-left: 0.25%" id="'+documenti[i].id+'">' +
                                '                                    <a class="btn btn-primary btn-block ml-auto" style="padding-left: 0%;color:white;width: 30%" id="btnrimuovidocumento">' +
                                '                                    <i class="fa fa-fw fa-minus-circle"></i>' +
                                '                                    <label for="rimuovidocumento" style="padding-left: auto" id="'+documenti[i].id+'_rimuovi" onclick="Rimuovi_documento('+"'"+documenti[i].id+"'"+')">Rimuovi documento</label>' +
                                '                                    </a>' +
                                '                                    <div class="form-group mt-4">' +
                                '                                    <label for="titolodocumento">Titolo documento:' + ' '+ documenti[i].titolo + '</label>' +
                                '                                </div>' +
                                '                                <div class="form-group">' +
                                '                                    <label for="materiadocumento">Materia:</label>' +
                                '                                </div>' +
                                '                                <a class="btn btn-primary btn-block" style="color:white" id="'+documenti[i].id+'_download" onclick="Download('+"'"+documenti[i].id+"'"+')">Download documento</a>' +
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