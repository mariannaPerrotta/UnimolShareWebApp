$(document).ready(function () {

    $.ajax({
        url: "../../pages/cdl.php",

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
                        for (var j = 0; j < n; j++) {

                            var materia = {
                                nome: data.nomi_materie[j].nome,
                            }

                          //  materie.push(materia);

                            $('#card_lista_annunci').append('');
                            var hook = $('#card_lista_annunci');
                            function annunci() {

                                $.ajax({
                                    url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzaannunciopermateria",
                                    type: 'POST',
                                    data: {materia: materia.nome},
                                    dataType: 'json',
                                    async: false,

                                    success: function (data) {
                                        if (data.libri.error === false) {
                                            var m = data.libri.contatore;
                                            var annunci = [];

                                            var hook = $('#card_lista_annunci');

                                            for (i = 0; i < m; i++) {
                                                var annuncio = {
                                                    titolo: data.libri[i].titolo,
                                                    prezzo: data.libri[i].prezzo,
                                                    edizione: data.libri[i].edizione,
                                                    casa_editrice: data.libri[i].casa_editrice,
                                                    autore: data.libri[i].autore,
                                                    contatto: data.libri[i].contatto,
                                                    email: data.libri[i].email,
                                                };

                                                annunci.push(annuncio);

                                                hook.append(
                                                    '            <div class="card card-register mx-auto mt-2" style="margin-bottom: 3rem!important">\n' +
                                                    '        <div class="card-body">\n' +
                                                    '            <form method="POST" style="padding-left: 0.25%">\n' +
                                                    '                <div class="form-group mt-4">\n' +
                                                    '                    <label for="titoloannuncio" style="white-space: normal;word-break: break-word; ">Titolo:' + ' ' + annunci[i].titolo + '</label>\n' +
                                                    '                </div>\n' +
                                                    '                <div class="form-group mt-4">\n' +
                                                    '                    <label for="autoreannuncio" style="white-space: normal;word-break: break-word; ">Autore:' + ' ' + annunci[i].autore + '</label>\n' +
                                                    '                </div>\n' +
                                                    '                <div class="form-group mt-4">\n' +
                                                    '                    <label for="prezzoannuncio" style="white-space: normal;word-break: break-word; ">Prezzo:' + ' ' + annunci[i].prezzo + '</label>\n' +
                                                    '                </div>\n' +
                                                    '                <div class="form-group mt-4">\n' +
                                                    '                       <label for="casa_editrice" style="white-space: normal;word-break: break-word; ">Casa Editrice:' + ' ' + annunci[i].casa_editrice + '</label>\n' +
                                                    '                        </div>\n' +
                                                    '                <div class="form-group mt-4">\n' +
                                                    '                    <label for="edizione" style="white-space: normal;word-break: break-word; ">Edizione:' + ' ' + annunci[i].edizione + '</label>\n' +
                                                    '                        </div>\n' +
                                                    '                <div class = "form-group mt-4">\n' +
                                                    '                    <div class = "form-row" style="margin-right: 25%; margin-left: 25%;">\n' +
                                                    '                        <button style="white-space: normal;word-break: break-word; " type="button" class="btn btn-primary btn-block mt-4" onclick="ContattaVenditore(' + "'" + 'hook' + i + "'" + ')" id="btnContattaVenditore' + i + '" style="color: white">Contatta Venditore</button>\n' +
                                                    '                    </div>\n' +
                                                    '               </div>\n' +
                                                    <!-- Metto già il campo ma lo metto nascosto -->
                                                    '               <div class="form-group mt-4">\n' +
                                                    '                    <label id="hook' + i + '" for="contatto" style="display: none;">Contatto: ' + annunci[i].contatto + '</label>\n' +

                                                    '               </div>\n');


                                            }
                                            hook.append('</form></div></div>');
                                        }

                                    }
                                })
                            }
                            hook.append('<div class="card card-register mx-auto mt-5" style="padding: 1%; margin-bottom: 3rem!important">Materia:' + ' ' + materia.nome + '</div>');
                            annunci();

                            materie.push(materia);
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