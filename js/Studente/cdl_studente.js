document.getElementById("seleziona_cdl").onclick = function () {

    $.ajax({

        url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzatutticdl",

        type: 'POST',

        data: '',

        dataType: "json",

        success: function (data) {

            if (!data.CDL.error) {

                var n = data.CDL.contatore;


                if (n === 0)
                    alert("Non ci sono CDL");

                var array = [];


                for (var i = 0; i < n; i++) {

                    var cdl = {
                        nome: data.CDL[i].nome,
                        id: data.CDL[i].id,
                    }
                    array.push(cdl);

                    if(document.getElementById("seleziona_cdl")) {

                        $('#seleziona_cdl').append(
                            '<option id="' + array[i].nome + '"  name="' + array[i].nome + '" value="' + array[i].id + '"> ' + array[i].nome + '  </option>'
                        );
                    }

                }

            }
        }
    });

};