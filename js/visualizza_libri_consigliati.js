document.getElementById("materia_libri").onclick =function () {



    alert("gg");

            $.ajax({

                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzalibripermateria",

                type: 'POST',

                data: {materia: materia},

                dataType: "json",

                success: function (data) {

                    if (data.libri.error == false) {

                        var n = data.libri.contatore;
                        var array = [];
                        for (var i = 0; i < n; i++) {

                            var libro = {
                                titolo: data.libri[i].titolo,
                                autore: data.libri[i].autore,
                                casa_editrice: data.libri[i].casa_editrice,
                                edizione: data.libri[i].edizione,
                                link: data.libri[i].link,
                            }

                            array.push(libro);

                            $('#card_libri_consigliati').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">' +
                                '                                    <div class="card-body">' +
                                '                                    <form method="POST" style="padding-left: 0.25%">' +
                                '                                    <div class="form-group mt-4">' +
                                '                                    <label for="titololibro">Titolo:' + ' ' + array[i].titolo + '</label>' +
                                '                                    <label for="titololibro">Autore:' + ' ' +array[i].autore + '</label>' +
                                '                                    <label for="titololibro">Casa Editrice:' + ' ' + array[i].casa_editrice + '</label>' +
                                '                                    <label for="titololibro">Edizione:' + ' ' + array[i].edizione + '</label>' +
                                '                                    <label for="titololibro">Link:' + ' ' + array[i].link + '</label>' +

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