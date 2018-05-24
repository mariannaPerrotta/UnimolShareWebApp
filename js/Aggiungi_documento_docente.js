document.getElementById("btnaggiungidocumento").onclick= function () {


    var titolo = $("#exampleInputTitolo").val();

    var CodDocente =$("#exampleInputCodDocente").val();

    var CodMateria =$("#exampleInputCodMateria").val();

    var Link =$("#exampleInputLink").val();


    var data = {

        titolo: titolo,

        CodDocente: CodDocente,

        CodMateria: CodMateria,

        Link: Link,

    };


    $.ajax({

        url: "http://localhost/UnimolShare/public/Aggiungi_documento_docente",

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



