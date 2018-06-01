document.getElementById("btnAnnunciCaricati").onclick= function () {
    var matricola =  $_SESSION['utente']['matr'];
    alert(matricola);
    var data={
        matricola: matricola
    };

    // $.ajax({
    //
    //     url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/visualizzaAnnuncioPerId",
    //
    //     type: 'POST',
    //
    //     data: data,
    //
    //     dataType:"json"
    //
    //     success: function (data) {
    //         if(data.error=false){
    //
    //             var annunci={
    //                 titolo:data.
    //
    //             };
    //         };
    //     };
    // });

}