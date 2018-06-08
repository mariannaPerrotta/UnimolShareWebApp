document.getElementById("idRicerca").onclick = function () {
    alert("ok");
    var key=$("#InputRicerca").val();

    var data={
        key: key,
    };



    $.ajax({

        url:"http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/ricerca",
        type: 'POST',
        data: data,
        dataType: "json",

        success: function (data) {

           // alert(JSON.stringify(data.lista.error==false));

            if(JSON.stringify(data.lista.error==false)){


                var n=data.lista.contatore;
                var ricerche = [];

                for(var i =0; i<n; i++){

                    var ricerca = {
                        id: data.lista[i].id,
                        titolo: data.lista[i].titolo,
                        tabella: data.lista[i].tabella,
                    }

                    ricerche.push(ricerca);
                    //alert(JSON.stringify(ricerche[i].tabella));
                    alert("ok");
                        if((JSON.stringify(ricerche[i].tabella)) === "annuncio") {

                            $('#ricerca').append('<div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">' +
                                '        <div class="card-body">' +
                                '            <form method="POST" style="padding-left: 0.25%">' +
                                '                <div class="form-group mt-4">' +
                                '                    <label for="titoloannuncio">Titolo:</label>' +
                                '                </div>' +
                                '                <div class="form-group">' +
                                '                    <label for="autoreannuncio">Autore:</label>' +
                                '                </div>' +
                                '                <div class="form-group">' +
                                '                    <label for="corsodistudioannuncio">Corso di studio:</label>' +
                                '                </div>' +
                                '                <div class="form-group">' +
                                '                    <label for="materiaannuncio">Materia:</label>' +
                                '                </div>' +
                                '                <div class="form-group">' +
                                '                    <label for="prezzoannuncio">Prezzo:</label>' +
                                '                </div>' +
                                '                <div class = "form-group">' +
                                '                    <div class = "form-row" style="margin-right: 25px; margin-left: 25px;">' +
                                '                        <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal" style="color: white">Contatta Venditore</a>' +
                                '                    </div>' +
                                '                </div>' +

                                '                <a class="scroll-to-top rounded" href="#page-top">' +
                                '                    <i class="fa fa-angle-up"></i>' +
                                '                </a>' +

                                '                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                                '                    <div class="modal-dialog" role="document">' +
                                '                        <div class="modal-content">' +
                                '                            <div class="modal-header">' +
                                '                                <h5 class="modal-title" id="exampleModalLabel">Contatti</h5>' +
                                '                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">' +
                                '                                    <span aria-hidden="true">×</span>' +
                                '                                </button>' +
                                '                            </div>' +
                                '                            <div class="modal-body">Email: </div>' +
                                '                            <div class="modal-body">Telefono: </div>' +
                                '                            <div class="modal-footer">' +
                                '                                <button class="btn btn-secondary" type="button" data-dismiss="modal" >Indietro</button>' +
                                '                            </div>' +
                                '                        </div>' +
                                '                    </div>' +
                                '                </div>' +
                                '            </form>' +
                                '        </div>' +
                                '    </div>' +
                                '</div>'
                            );
                        }

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


                }
            }
        }
    })
}