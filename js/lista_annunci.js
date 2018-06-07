$(document).ready(function () {

    $.ajax({
        url: "http://localhost/UnimolShareWebApp/pages/cdl.php",

        type: 'POST',

        data: {cdl: null},

        dataType: "html",

        success: function (data) {
            var cdl = data;

            $.ajax({
                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzamateriapercdl",

                type: 'POST',

                data: {cod_cdl: cdl},

                dataType: "json",

                success: function (data) {
                    if (data.nomi_materie.error == false) {

                        var n = data.nomi_materie.contatore;
                        var materie = [];
                        for (var i = 0; i < n; i++) {

                            var materia = {
                                nome: data.nomi_materie[i].nome,
                            }

                            materie.push(materia);

                            $('#card_lista_annunci').append('');

                            $.ajax({
                                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzaannunciopermateria",
                                type: 'POST',
                                data: {materia: materia.nome},
                                dataType:'json',

                                success: function (data) {
                                    if(data.libri.error===false) {
                                        var n = data.libri.contatore;
                                        var annunci= [];

                                        var hook = $('#card_lista_annunci');

                                        for(i=0; i<n; i++){
                                            var annuncio={
                                                titolo: data.libri[i].titolo,
                                                prezzo: data.libri[i].prezzo,
                                                edizione: data.libri[i].edizione,
                                                casa_editrice: data.libri[i].casa_editrice,
                                                autore: data.libri[i].autore,
                                                contatto: data.libri[i].contatto,
                                            };

                                            annunci.push(annuncio);

                                            hook.append('<div class="card card-register mx-auto mt-5" style="padding: 1%; margin-bottom: 3rem!important">Materia:'+' '+materie[i].nome+'</div>'+
                                                '            <div class="card card-register mx-auto mt-2" style="margin-bottom: 3rem!important">\n' +
                                                        '        <div class="card-body">\n' +
                                                        '            <form method="POST" style="padding-left: 0.25%">\n' +
                                                        '                <div class="form-group mt-4">\n' +
                                                        '                    <label for="titoloannuncio">Titolo:'+' '+annunci[i].titolo+'</label>\n' +
                                                        '                </div>\n' +
                                                        '                <div class="form-group mt-4">\n' +
                                                        '                    <label for="autoreannuncio">Autore:'+' '+annunci[i].autore+'</label>\n' +
                                                        '                </div>\n' +
                                                        '                <div class="form-group mt-4">\n' +
                                                        '                    <label for="prezzoannuncio">Prezzo:'+' '+annunci[i].prezzo+'</label>\n' +
                                                        '                </div>\n' +
                                                        '                <div class="form-group mt-4">\n' +
                                                        '                       <label for="casa_editrice">Casa Editrice:'+' '+annunci[i].casa_editrice+'</label>\n' +
                                                '                        </div>\n' +
                                                        '                <div class="form-group mt-4">\n' +
                                                        '                    <label for="edizione">Edizione:'+' '+annunci[i].edizione+'</label>\n' +
                                                '                        </div>\n' +
                                                        '                <div class = "form-group mt-4">\n' +
                                                        '                    <div class = "form-row" style="margin-right: 25%; margin-left: 25%;">\n' +
                                                        '                        <button type="button" class="btn btn-primary btn-block mt-4" onclick="ContattaVenditore('+"'"+'hook'+i+"'"+')" id="btnContattaVenditore'+i+'" style="color: white">Contatta Venditore</button>\n' +
                                                        '                    </div>\n' +
                                                        '               </div>\n' +
                                                                        <!-- Metto già il campo ma lo metto nascosto -->
                                                        '               <div class="form-group mt-4">\n' +
                                                        '                    <label id="hook'+i+'" for="contatto" style="display: none;">Contatto: '+annunci[i].contatto+'</label>\n' +
                                                        '               </div>\n');


                                        }
                                        hook.append('</form></div></div>');
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

});

function ContattaVenditore(hook){

    var element = (document.getElementById(hook));

    //Controllo la visibilità dell'elemento e la inverto
    if(element.style.display === "none")
        element.style.display = "inline";
    else
        element.style.display = "none";

}