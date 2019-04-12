window.onload = function () {
    var oUl = document.getElementById("list");
    var oLi = oUl.getElementsByTagName("li");
    var inp = document.getElementsByTagName("input");

    inp[0].onkeyup = function (ev) {
        var ev = ev || event;
        if (this.value != "") {
            if (ev.keyCode == 13) {
                addInfo();
            }
        }
    }

    inp[1].onclick = addInfo;


    inp[2].onclick = function () {
        for (var i = 0; i < oLi.length; i++) {
            if (!oLi[i].onOff) {
                oUl.removeChild(oLi[i]);
                i--;
            }
        }
    }


    function addInfo() {
        var li = document.createElement("li");
        if (inp[0].value) {
            li.innerHTML = inp[0].value;
            li.onOff = true;
            if (oUl.children[0]) {
                oUl.insertBefore(li, oUl.children[0]);
            } else {
                oUl.appendChild(li);
            }
        } else {
            alert("请输入内容！");
        }
        for (var i = 0; i < oLi.length; i++) {
            (function (j) {
                oLi[j].onmouseover = function () {
                    this.style.background = "#999";
                    this.style.color = "#fff";
                }
                oLi[j].onmouseout = function () {
                    this.style.background = "";
                    this.style.color = "";
                }

                oLi[j].onclick = function () {
                    if (j % 2 == 0) {
                        this.style.background = "pink";
                        oLi[j].onmouseout = function () {
                            this.style.background = "pink";
                        }
                    } else {
                        this.style.background = "#3c9";
                        oLi[j].onmouseout = function () {
                            this.style.background = "#3c9";
                        }
                    }
                    this.onOff = !this.onOff;
                }

            })(i);
        }
        inp[0].value = "";
    }

}