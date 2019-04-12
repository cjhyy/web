window.onload = function () {
    var checkAll = document.getElementById("checkAll");
    var checkReverse = document.getElementById("checkReverse");
    var input = document.getElementsByTagName("input");
    var label = document.getElementsByTagName("label")[0];

    checkAll.onclick = function () {
        for (var i = 1; i < input.length; i++) {
            input[i].checked = this.checked;
        }

    }

    checkReverse.onclick = function () {
        for (var i = 1; i < input.length; i++) {
            input[i].checked = !input[i].checked;
        }

    }

}