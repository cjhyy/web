window.onload = function(){
    var dirl = $("#dirl")[0];
    var dirr = $("#dirr")[0];
    var scrollCon =$(".scroll_Con")[0];
    var dls = $("dl");
    var num = dls.length;
    var len = 0;
    if( num/3>parseInt( num/3 ) ){
        len = parseInt( num/3 );
    }else{
        len = parseInt( num/3 )-1;
    }
    var cur = 0;
    //向左滚动
    dirl.onclick = function(){

        cur--;
        if( cur>=0 ){
            scrollCon.style.left = -cur * 498 + "px";
        }else{
        
            cur = len;
            scrollCon.style.left = -cur * 498 + "px";
        }
        
    }
    //向右滚动
    dirr.onclick = function(){
        cur++;
        if( cur<=len ){
            scrollCon.style.left = -cur * 498 + "px";
        }else{
        
            cur = 0;
            scrollCon.style.left = -cur * 498 + "px";
        }
    }
}