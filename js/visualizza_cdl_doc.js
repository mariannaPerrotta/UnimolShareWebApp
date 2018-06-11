$(document).ready(function() {

    alert("ok");

    $.ajax({
        url: "../../pages/matricola.php",

        type: 'POST',

        data: {matr: null},

        dataType: "html",

        success: function (data) {

            alert("ok2");

            $.ajax({

                url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzacdlperiddocente",

                type: 'POST',

                data: {iddoc: data},

                dataType: "json",

                success: function (data) {

                    alert("ok3");

                    if (data.CDL.error === false) {

                        var n = data.documenti.contatore;
                        var cdls = [];
                        for (var i = 0; i < n; i++) {

                            var cdl = {
                                materia: data.documenti[i].materia
                            };

                            cdl.materia = nome_cdl(cdl.materia);
                            cdls.push(cdl);

                            $('#cognome').append('  <div class="form-group">' +
                                '                       <label for="CdL">Corso di Laurea: '+ cdls[i].materia + '</label>' +
                                '                   </div>');

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


function nome_cdl(id){
    var cdl;
    $.ajax({
        url: "http://unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzacdlperid",

        type: 'POST',
        data: {id: id},
        dataType: "json",
        async: false,

        success: function (data2) {
            cdl = data2.CDL[0].nome;

        }

    });
    return cdl;
}