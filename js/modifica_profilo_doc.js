document.getElementById("btnmodificaprofilodoc").onclick= function () {


        var Nome = $("#InputNome").val();

        var Cognome =$("#InputCognome").val();

        var OldPassword =$("#InputOldPassword").val();

        var NewPassword =$("#InputNewPassword").val();



        var data = {

            Nome: Nome,

            Cognome: Cognome,

            OldPassword: OldPassword,

            NewPassword: NewPassword,

        };


        $.ajax({

            url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/modificaProfilo",

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

}