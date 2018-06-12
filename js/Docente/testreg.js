
document.getElementById("btnregisterdoc").onclick = function () {
    var myForm = document.getElementById("form");
    var go = false;
    for (var i = 1; i < myForm.elements.length; i++) {

        if (myForm.elements[i - 1].id === "start") {
            go = true;
        }
        if (myForm.elements[i].id === "stop")
            go = false;
        if (go) {
            if ((myForm.elements[i]).checked) {
                id = myForm.elements[i].value;
                var data = {
                    id: id,
                    matricola: matricola
                };
            }
        }
    }
}
