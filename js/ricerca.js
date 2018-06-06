document.getElementById("idRicerca").onclick=function () {
    var key=$(InputRicerca).val();

    var data={
        key: key
    };
    $.ajax({
        url:"http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/ricerca",
        type: "POST",
        data: data,
        dataType: "json",

        success: function (data) {
            if(data.lista.error==false){
                var n=data.lista.contatore;
                var ricerche= [];
                for(var i =0; i<n; i++){
                    var ricerca={
                        id: data.ricerche[i].id,
                        titolo:data.ricerche[i].titolo,
                        tabella:data.ricerche[i].tabella,
                    }

                    ricerche.push(ricerca);
                    switch(data.ricerche[i].tabella){
                        case 'annuncio':
                            $('#ricerca').append('<div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">\n' +
                                '        <div class="card-body">\n' +
                                '            <form method="POST" style="padding-left: 0.25%">\n' +
                                '                <div class="form-group mt-4">\n' +
                                '                    <label for="titoloannuncio">Titolo:</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                    <label for="autoreannuncio">Autore:</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                    <label for="corsodistudioannuncio">Corso di studio:</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                    <label for="materiaannuncio">Materia:</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                    <label for="prezzoannuncio">Prezzo:</label>\n' +
                                '                </div>\n' +
                                '                <div class = "form-group">\n' +
                                '                    <div class = "form-row" style="margin-right: 25px; margin-left: 25px;">\n' +
                                '                        <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal" style="color: white">Contatta Venditore</a>\n' +
                                '                    </div>\n' +
                                '                </div>\n' +
                                '                <!-- Scroll to Top Button-->\n' +
                                '                <a class="scroll-to-top rounded" href="#page-top">\n' +
                                '                    <i class="fa fa-angle-up"></i>\n' +
                                '                </a>\n' +
                                '                <!-- Logout Modal-->\n' +
                                '                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n' +
                                '                    <div class="modal-dialog" role="document">\n' +
                                '                        <div class="modal-content">\n' +
                                '                            <div class="modal-header">\n' +
                                '                                <h5 class="modal-title" id="exampleModalLabel">Contatti</h5>\n' +
                                '                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">\n' +
                                '                                    <span aria-hidden="true">×</span>\n' +
                                '                                </button>\n' +
                                '                            </div>\n' +
                                '                            <div class="modal-body">Email: </div>\n' +
                                '                            <div class="modal-body">Telefono: </div>\n' +
                                '                            <div class="modal-footer">\n' +
                                '                                <button class="btn btn-secondary" type="button" data-dismiss="modal" >Indietro</button>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                    </div>\n' +
                                '                </div>\n' +
                                '            </form>\n' +
                                '        </div>\n' +
                                '    </div>\n' +
                                '</div>\n');
                            break;
                        case 'docs':
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
                                '    </div>');
                            break;
                        case 'libri':
                            $('#ricerca').append//to do card libro
                            break;
                    }

                }
            }
        }
    })
}