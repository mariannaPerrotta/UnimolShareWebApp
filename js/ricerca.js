function ricerca(id) {

    var key=$("#"+id).val();

    var data={
        key: key,
    };

    $.ajax({

        url:"../../pages/Studente/ricerca.php",
        type: 'POST',
        data: data,
        success: function (data) {
            window.location.assign('index.php?action=ricerca_1');
        },
        error: function (err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }
    });

}