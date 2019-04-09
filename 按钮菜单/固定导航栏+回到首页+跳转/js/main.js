window.onload = function () {
    var btn = document.getElementById("btn");
    var timer = null;
    var isTop = true;
    var nav = document.getElementById("nav");
    btn.onclick = function () {
        timer = setInterval(function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.floor(-scrollTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed;
            isTop = true;
            if (scrollTop == 0) {
                clearInterval(timer);
            }
        }, 50);
    }

    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var top = nav.offsetTop + 50;
        if (scrollTop >= top) {
            nav.className = "fixed";
        } else {
            nav.className = "";
        }
        if (scrollTop > 500) { btn.style.display = "block"; } else { btn.style.display = "none"; }
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    }
}
function aa(target) {
    document.documentElement.scrollTop = document.body.scrollTop = target.offsetTop - 50;
}