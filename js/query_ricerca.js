$(document).ready(function() {

    var key=$("#ricerca").val();

    var data={
        key: key,
    };

    $.ajax({

        url:"http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/ricerca",
        type: 'POST',
        data: data,
        dataType: "json",

        success: function (data) {

            if(JSON.stringify(data.lista.error==false)){


                var n=data.lista.contatore;
                var ricerche = [];
                var hook = $('#ricerca');

                for(var i =0; i<n; i++) {

                    var ricerca = {
                        id: data.lista[i].id,
                        titolo: data.lista[i].titolo,
                        tabella: data.lista[i].tabella,
                    }

                    ricerche.push(ricerca);


                    if (ricerche[i].tabella === "annuncio") {

                        hook.append('<div class="card card-register mx-auto mt-5" style="padding: 1%; margin-bottom: 3rem!important">Annunci</div>' +
                            '            <div class="card card-register mx-auto mt-2" style="margin-bottom: 3rem!important">\n' +
                            '        <div class="card-body">\n' +
                            '            <form method="POST" style="padding-left: 0.25%">\n' +
                            '                <div class="form-group mt-4">\n' +
                            '                    <label for="titoloannuncio">Titolo: ' + annunci[i].titolo + '</label>\n' +
                            '                </div>\n' +
                            '                <div class="form-group mt-4">\n' +
                            '                    <label for="autoreannuncio">Autore:' + ' ' + annunci[i].id + '</label>\n' +
                            '                </div>\n' +
                            '                <div class="form-group mt-4">\n' +
                            '                    <label for="prezzoannuncio">Prezzo:' + ' ' + annunci[i].tabella + '</label>\n' +
                            '                </div>\n' +
                            '                <div class="form-group mt-4">\n' +
                            '                       <label for="casa_editrice">Casa Editrice:' + ' ' + annunci[i].casa_editrice + '</label>\n' +
                            '                        </div>\n' +
                            '                <div class="form-group mt-4">\n' +
                            '                    <label for="edizione">Edizione:' + ' ' + annunci[i].edizione + '</label>\n' +
                            '                        </div>\n' +
                            '                <div class = "form-group mt-4">\n' +
                            '                    <div class = "form-row" style="margin-right: 25%; margin-left: 25%;">\n' +
                            '                        <button type="button" class="btn btn-primary btn-block mt-4" onclick="ContattaVenditore(' + "'" + 'hook' + i + "'" + ')" id="btnContattaVenditore' + i + '" style="color: white">Contatta Venditore</button>\n' +
                            '                    </div>\n' +
                            '               </div>\n' +
                            <!-- Metto già il campo ma lo metto nascosto -->
                            '               <div class="form-group mt-4">\n' +
                            '                    <label id="hook' + i + '" for="contatto" style="display: none;">Contatto: ' + annunci[i].contatto + '</label>\n' +
                            '               </div>\n');



                        hook.append('</form></div></div></div>');

                }
/*
                    if((JSON.stringify(ricerche[i].tabella)) === "dcs") {

                        $('#ricerca').append('<div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">\n' +
                            '        <div class="card-body">\n' +
                            '            <form method="POST" style="padding-left: 0.25%">\n' +
                            '                <div class="form-group mt-4">\n' +
                            '                    <label for="titolodocumento">Titolo documento:</label>\n' +
                            '                </div>\n' +
                            '                <div class="form-group">\n' +
                            '                    <label for="materiadocumento">Materia:</label>\n' +
                            '                </div>\n' +
                            '                <div form="form-group">\n' +
                            '                    <div class="form-row">\n' +
                            '                        <label style="padding-bottom: 15px;padding-right: 2%" for="Valutazione">Valutazione</label>\n' +
                            '                        <select name="Valutazione" id="Valutazione" style="height: 27px; border-top-width: 1px;">\n' +
                            '                            <option value="1"> ★ </option>\n' +
                            '                            <option value="2"> ★★ </option>\n' +
                            '                            <option value="3"> ★★★ </option>\n' +
                            '                            <option value="4"> ★★★★ </option>\n' +
                            '                            <option value="5"> ★★★★★ </option>\n' +
                            '                        </select>\n' +
                            '                    </div>\n' +
                            '                </div>\n' +
                            '                <a class="btn btn-primary btn-block" style="color:white" id="btnvisualizzadocumento">Download documento</a>\n' +
                            '\n' +
                            '            </form>\n' +
                            '        </div>\n' +
                            '    </div>'
                        );

                    }
                    if(JSON.stringify(ricerche[i].tabella) === "libri") {

                    }
*/
                }

            }
        }
    });
});