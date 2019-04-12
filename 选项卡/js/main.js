window.onload = function(){
    var tab = document.getElementById("tab");
    var lis = tab.getElementsByTagName("li");
    var text = document.getElementById("text");
    var con = text.getElementsByTagName("div");

    for (var i = 0; i< lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function(){
            for( var i=0; i<lis.length; i++ ){
                lis[i].className = "";
                con[i].className = "";
            }
            this.className = "sec";
            con[this.index].className = "cur";
        }
     };
}