
document.getElementById("btnAnnunciCaricati").onclick= function () {




    $.ajax({
            url: "http://localhost/UnimolShareWebApp/pages/utente.php",

            type: 'POST',

            data: {matr: null},

            dataType: "html",

            success:function (data) {


                $.ajax({

                    url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzadocumentiperid",

                    type: 'POST',

                    data: {matr: data},

                    dataType:"json",

                    success: function (data) {
                        if(data.error=false){

                            var annunci={
                                //  titolo:data.

                            };
                        };
                    }
                });


            }

        }


    )

}