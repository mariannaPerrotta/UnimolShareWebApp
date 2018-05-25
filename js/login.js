document.getElementById("btnlogin").onclick= function () {

//input da dare al servizio, quelli nelle parentesi sono gli id dei reattangoli in cui inserite username e password

    var email = $("#exampleInputEmail1").val();

    var password =$("#exampleInputPassword1").val();



// questo serve per mettere insieme i due input

    var data = {

        email: email,

        password: password,
    };


// qui chiamate il servizio

    $.ajax({

        url: "http://localhost/UnimolShare/public/login",

        type: 'POST',

        data: data,

        dataType:"json", //json perchè l'output deve essere un json


// funzione che dice che è stato effettuato il servizio
        success: function (data) {
//questo serve per vedere quando l'utente è autenticato



            if(data.error==false){


                var tabella= data.utente.tabella;
                $.ajax({
                        url: "http://localhost/UnimolShareWebApp/pages/session.php",

                        type: 'POST',

                        data: ({matr: data.utente.matricola}),

                        dataType: "html",

                        success:function (data) {
                             alert("yes " + JSON.stringify(data));
                            // window.location.assign('index.php');


                            $.ajax({
                                    url: "http://localhost/UnimolShareWebApp/pages/utente.php",

                                    type: 'POST',

                                    data: ({tab: tabella}),

                                    dataType: "html",

                                    success:function (data) {
                                         alert("yes " + JSON.stringify(data));
                                        if( data=="studente"){
                                            window.location.assign('index.php');
                                        }
                                        if( data=="docente"){
                                            window.location.assign('index_doc.php');
                                        }

                                    }
                                }


                            )

                        }
                    }


                )




                // serve per cambiare pagina

            }


            console.log(data);

        },

        error: function ( err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }


    });

};