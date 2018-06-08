$(document).ready(function () {

    $.ajax({
        url: "http://localhost/UnimolShareWebApp/pages/matricola.php",

        type: 'POST',

        data: {matr: null},

        dataType: "html",

        success: function (data) {

            var matricola = data;

            $.ajax({

                url: "http://unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzaannuncioperid",

                type: 'POST',

                data: {matricola: matricola},

                dataType: "json",

                success: function (data) {
                    if (data.annunci.error == false) {


                        var n = data.annunci.contatore;
                        var annunci = [];
                        for (var i = 0; i < n; i++) {

                            var annuncio = {
                                id: data.annunci[i].id,
                                titolo: data.annunci[i].titolo,
                                autore: data.annunci[i].autore,
                                materia: data.annunci[i].cod_materia,
                                contatto: data.annunci[i].contatto,
                                prezzo: data.annunci[i].prezzo,
                            }


                            function nome_materie(){
                                var materia;
                                    $.ajax({
                                         url: "http://unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzamateriaperid",

                                         type: 'POST',
                                         data: {id: annuncio.materia},
                                         dataType: "json",
                                        async: false,

                                success: function (data2) {
                                      materia = data2.nomi_materie[0].nome;

                                }

                            });
                                return materia;
                            }

                          var  materia2=nome_materie();

                            annuncio.materia=  materia2;
                            annunci.push(annuncio);

                            $('#card_annunci').append('  <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">\n' +
                                '        <div class="card-body" >\n' +
                                '            <form method="POST" style="padding-left: 5%;">\n' +
                                '                <a class="btn btn-primary btn-block ml-auto" style="padding-left: 0%;color:white;width: 30%" id="btnrimuoviannuncio">\n' +
                                '                    <i class="fa fa-fw fa-minus-circle"></i>\n' +
                                '                    <label for="rimuovidocumento" style="padding-left: auto" id=" '+ annunci[i].id + '"onclick="RimuoviAnnuncio('+"'"+annunci[i].id+"'"+')">Rimuovi</label>\n' +
                                '                </a>\n' +
                                '                <div class="form-group mt-3">\n' +
                                '                    <label for="titololibro">Titolo Libro:' + ' ' + annunci[i].titolo + '</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                    <label for="autorelibro">Autore:' + ' ' + annunci[i].autore + '</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                    <label for="edizionelibro">Materia:' + ' ' + annunci[i].materia + '</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                    <label for="prezzoannuncio">Prezzo:' + ' ' + annunci[i].prezzo + '</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                    <label for="casaeditrice">Contatto:' + ' ' + annunci[i].contatto + '</label>\n' +
                                '                </div>\n' +
                                '            </form>\n' +
                                '        </div>\n' +
                                '    </div>');



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