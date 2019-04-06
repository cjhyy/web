$(function(){
    var timer = null;
    var cur = 0;
    var len = $("#main li").length;
    //鼠标滑过容器停止播放
    $("#main").hover(function(){
        clearInterval(timer);
    },function(){
        showImg();
    });
    // 遍历所有圆点导航实现划过切换至对应的图片
    $("#main li").click(function(){
        clearInterval(timer);
        cur = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("#main img").eq(cur).fadeIn(200).siblings("img").fadeOut(200);
    });

    //定义图片切换函数
    function showImg(){
        timer = setInterval(function(){
            cur++;
            if( cur>=len ){ cur=0; }
            $("#main img").eq( cur ).fadeIn(200).siblings("img").fadeOut(200);
            $("#main li ").eq(cur).addClass("active").siblings().removeClass("active");
            
        },1000);
    }
    showImg();
});