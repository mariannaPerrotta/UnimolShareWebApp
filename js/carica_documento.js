document.getElementById("aggiungi").onclick = function () {

    var urlUploder = "../../php/LocalUploader.php";
    var titolo = document.getElementById("InputTitolo").value;
    var cod_stud = document.getElementById("InputMatricola").value;
    var cod_mat = 1; //Da sistemare
    var formData = new FormData($("#form-carica").get(0));
    formData.append("titolo", titolo);
    formData.append("cod_doc", 111); //Da sistemare
    formData.append("cod_stud", cod_stud);
    formData.append("cod_mat", cod_mat);

    //Carico localmente il file
    $.ajax({

        url: urlUploder,
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,

        success: function (data) {

            alert(data);

        },
    });
}