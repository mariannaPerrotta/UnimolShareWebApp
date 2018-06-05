$(document).ready(function () {

    $.ajax({
        url: "http://localhost/UnimolShareWebApp/pages/matricola.php",

        type: 'POST',

        data: {matricola: null},

        dataType: "html",

        success: function (data) {
            var matricola = data;
            $.ajax({

                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzamateriapercdl",

                type: 'POST',

                data: {matricola: matricola},

                dataType: "json",

                success: function (data) {

                    if (data.libri.error == false) {

                        var n = data.libri.contatore;
                        var array = [];
                        for (var i = 0; i < n; i++) {

                            var libro = {
                                titolo: data.array[i].titolo,
                                autore: data.array[i].autore,
                                casa_editrice: data.array[i].casa_editrice,
                                edizione: data.array[i].edizione,
                                link: data.array[i].link,
                            }

                            array.push(nomi_materie);

                            $('#card_libri_consigliati').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">' +
                                '                                    <div class="card-body">' +
                                '                                    <form method="POST" style="padding-left: 0.25%">' +
                                '                                    <div class="form-group mt-4">' +
                                '                                    <label for="titololibro">Titolo:' + ' ' + data.array[i].titolo + '</label>' +
                                '                                    <label for="titololibro">Autore:' + ' ' + data.array[i].autore + '</label>' +
                                '                                    <label for="titololibro">Casa Editrice:' + ' ' + data.array[i].casa_editrice + '</label>' +
                                '                                    <label for="titololibro">Edizione:' + ' ' + data.array[i].edizione + '</label>' +
                                '                                    <label for="titololibro">Link:' + ' ' + data.array[i].link + '</label>' +

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