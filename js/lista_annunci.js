$(document).ready(function () {

    $.ajax({
        url: "http://localhost/UnimolShareWebApp/pages/cdl.php",

        type: 'POST',

        data: {cdl: null},

        dataType: "html",

        success: function (data) {
            var cdl = data.id_cdl;
            $.ajax({
                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzamateriapercdl",

                type: 'POST',

                data: {id_cdl: cdl},

                dataType: "json",

                success: function (data) {

                    if (data.nomi_materie.error == false) {

                        var n = data.nomi_materie.contatore;
                        var materie = [];
                        for (var i = 0; i < n; i++) {

                            var materia = {
                                nome: data.materie[i],
                            }

                            materie.push(materia);

                            $('card_lista_annunci').append('<div class="card header">Materia:'+materie[i].nome+'</div>');

                            $.ajax({
                                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzaannunciopermateria",
                                type: 'POST',
                                data: {materia: materia.nome},
                                dataType:'json',

                                success: function (data) {
                                    if(data.libri.error==false) {
                                        var n = data.libri.contatore;
                                        var annunci= [];

                                        for(i=0; i<n; i++){
                                            var annuncio={
                                                titolo: data.libri[i].titolo,
                                                prezzo: data.libri[i].prezzo,
                                                edizione: data.libri[i].edizione,
                                                casa_editrice: data.libri[i].casa_editrice,
                                                autore: data.libri[i].autore,
                                                contatto: data.libri[i].contatto,
                                            }

                                            annunci.push(annuncio);

                                            $('#card_lista_annunci').append('<div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">\n' +
                                                '        <div class="card-body">\n' +
                                                '            <form method="POST" style="padding-left: 0.25%">\n' +
                                                '                <div class="form-group mt-4">\n' +
                                                '                    <label for="titoloannuncio">Titolo:'+' '+annunci[i].titolo+'</label>\n' +
                                                '                </div>\n' +
                                                '                <div class="form-group">\n' +
                                                '                    <label for="autoreannuncio">Autore:'+' '+annunci[i].autore+'</label>\n' +
                                                '                </div>\n' +
                                                '                <div class="form-group">\n' +
                                                '                    <label for="prezzoannuncio">Prezzo:'+' '+annunci[i].prezzo+'</label>\n' +
                                                '                </div>\n' +
                                                '                <div class="form-group">\n' +
                                                '                       <label for="casa_editrice">Casa Editrice:'+' '+annunci[i].casa_editrice+'</label>\n' +
                                                '                <div class="form-group">\n' +
                                                '                    <label for="edizione">Edizione:'+' '+annunci[i].edizione+'</label>\n' +
                                                '                <div class = "form-group">\n' +
                                                '                    <div class = "form-row" style="margin-right: 25px; margin-left: 25px;">\n' +
                                                '                        <a class="btn btn-primary btn-block" id="btnContattaVenditore" data-toggle="modal" data-target="#exampleModal" style="color: white">Contatta Venditore</a>\n' +
                                                '                    </div>');


                                        }
                                    }

                                }
                            })


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