document.getElementById("btnaggiungidocumento").onclick= function () {


    var titolo = $("#exampleInputTitolo").val();

    var CodStudente =$("#exampleInputCodDocente").val();

    var Materia =$("#exampleInputCodMateria").val();

    var Link =$("#exampleInputLink").val();


    var data = {

        titolo: titolo,

        CodDocente: CodStudente,

        CodMateria: Materia,

        Link: Link,

    };


    $.ajax({

        url: "http://localhost/UnimolShare/public/Aggiungi_documento_studente",

        type: 'POST',

        data: data,

        dataType:"json",


        success: function (data) {

            if(data.error==false){
                window.location.assign('index.php')
            }


            console.log(data);

        },


    });



