window.onload = function(){
    var link = $('link')[1];
    var skin =$('#skin li');

    for( var i =0; i<skin.length; i++ ){
        skin[i].onclick = function(){
            for( var a in skin ){
                skin[a].className = "";
            }
            this.className = "current";
            link['href'] = "./css/"+this.id+".css";
        }
    }

}