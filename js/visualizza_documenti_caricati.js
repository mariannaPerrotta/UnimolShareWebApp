
document.getElementById("btnaggiungidocumento").onclick = function () {

}
//input per il servizio
var matr = @sessionStorage.
var tab = $("#exampleInputTabella").val();

var data = {
    //da sessione
};

//chiamo il servizio
$.ajax({

    url: "http://localhost/UnimolShare/public/visualizzadocumentoperid",

    type: 'POST',

    data: data,

    dataType: "json",

// funzione che dice che è stato effettuato il servizio
    success: function (data) {

        if (data.error == false) {
            var documento = {
                nome: data.nome;
            link: data.link; //postman vedi json
        }

        }


        console.log(data);

    },


});



