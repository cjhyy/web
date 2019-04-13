
$(function () {
    $('.addressList li').on("click",function(){
		$(this).find('a').addClass('add_checked')
			.end().siblings().find('a').removeClass('add_checked');
		var add = $(this).find('a').text();
		$('.city span a').text( add );
	});
    $('.retop').click(function () {

        $("html,body").animate({ "scrollTop": "0px" }, 200);

    });
    $(document).scroll(function () {
        //滚动时上边固定列表 
        var kill = $("#secKill").offset().top;
        $(document).scrollTop() > kill ? $("#topFixed").slideDown(300) : $("#topFixed").slideUp(300);

    });

    // 广告图轮播
    var images = document.querySelectorAll('.wrap img');
    var spans = document.querySelectorAll('.follow span');
    var leftBut = document.getElementById('leftBut');
    var rightBut = document.getElementById('rightBut');
    // 定义有参函数
    function showImage(index) {
        for (var i = 0; i < images.length; i++) {
            spans[i].index = i;//自定义属性，得到对应的下标
            images[i].index = i;//自定义属性，得到对应的下标
            images[i].style.zIndex = 100 - i;//为图片排列顺序
            images[i].style.opacity = '0';//将图片透明度全部赋值为0
            spans[i].style.background = 'none';//圆点北京色全部设置为黑色
        }
        //将传入参数下标值的图片透明度赋值为 1
        images[index].style.opacity = '1';
        //将传入参数下标值的图片的背景色赋值为white
        spans[index].style.background = 'white';
    }
    showImage(0);//初始设置下标为0的图片和圆点的样式

    var count = 1;//获取计数器
    // 定义自动轮播函数
    function imageMove() {
        // 判断count的值如果能被4整除，则将count重新赋值为0；
        if (count % 4 == 0) {
            count = 0;
        }
        // 将count值当做参数传给函数showImage();
        showImage(count);
        count++;//执行一次 ＋1
    }
    // 设置两秒调用一次函数imageMove()，并且赋值给imageInitailMove
    var imageInitailMove = setInterval(imageMove, 2000);
    // 向左点击事件
    leftBut.onclick = function () {
        // 先清除定时器
        clearInterval(imageInitailMove);
        // 由于和自动轮方向相反所以要判断count的值当值为0时，重新赋值为4，继续循环
        if (count == 0) {
            count = 4;
        }
        count--;
        showImage(count);//调用函数count先自－
        imageInitailMove = setInterval(imageMove, 2000);
    }
    // 向右的点击事件
    rightBut.onclick = function () {
        clearInterval(imageInitailMove);
        imageMove();//由于和自动轮播的方向相同所以直接调用
        // 重新为定时器赋值
        imageInitailMove = setInterval(imageMove, 2000);
    }
    // 圆点的点击事件
    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = function () {
            clearInterval(imageInitailMove);
            // 将当前点击的圆点的下标值赋值给count
            count = event.target.index;
            // 调用函数
            showImage(count);
            imageInitailMove = setInterval(imageMove, 2000);
        }
    }
    //秒杀图片滚动
    var kill_num = $('.secBody .images dl').length;
    var kill_len = 0;
    var click_num = 0;

    if (kill_num / 5 > parseInt(kill_num / 5)) {
        kill_len = parseInt(kill_num / 5);
    } else {
        kill_len = parseInt(kill_num / 5 - 1);
    }

    $('.secBody .dirl').click(function () {
        click_num++;
        if (click_num <= kill_len) {
            $('.scrollImg .images').animate({ 'left': -click_num * 1000 }, 300);
        } else {
            click_num = kill_len;
        }
    });
    $('.secBody .dirr').click(function () {
        click_num--;
        if (click_num >= 0) {
            $('.scrollImg .images').animate({ 'left': -click_num * 1000 }, 300);
        } else {
            click_num = 0;
        }
    });

    /*秒杀倒计时*/
    function countDown(years, months, days, hours, minutes) {
        var dateFinal = new Date(years, months, days, hours, minutes);  //设置倒计时到达时间
        var dateNow = new Date();  //获取系统当前时间
        var dateSub = dateFinal - dateNow;  //计算差值，单位毫秒
        var day = hour = minute = second = dayBase = hourBase = minuteBase = secondBase = 0;  //初始化各个数值

        dayBase = 24 * 60 * 60 * 1000;  //计算天数的基数，单位毫秒。
        hourBase = 60 * 60 * 1000;  //计算小时的基数，单位毫秒。
        minuteBase = 60 * 1000;  //计算分钟的基数，单位毫秒。
        secondBase = 1000;  //计算秒钟的基数，单位毫秒。
        day = Math.floor(dateSub / dayBase);  //计算天数，并取下限值。
        hour = Math.floor(dateSub % dayBase / hourBase);  //计算小时，并取下限值。
        minute = Math.floor(dateSub % dayBase % hourBase / minuteBase);  //计算分钟，并取下限值。
        second = Math.floor(dateSub % dayBase % hourBase % minuteBase / secondBase);  //计算秒钟，并取下限值.
        $('.secHead .hour').text(toDouble(hour));
        $('.secHead .min').text(toDouble(minute));
        $('.secHead .sec').text(toDouble(second));

    }
    //当小时，分钟和秒钟小于 10 的时候会显示为个位数，在前面加 0。
    function toDouble(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return '' + num;
        }
    }
    setInterval(function () {
        countDown(2019, 4, 11, 10, 0);
    }, 1000);

    /*优选专辑图片*/
    var bet_cur = 0;
    var bet_timer = null;

    $('.body .betDoll li').hover(function () {
        clearInterval(bet_timer);
        bet_cur = $(this).index();
        $(this).addClass('sec').siblings().removeClass('sec');
        $('.betterImages').eq(bet_cur).fadeIn(200).siblings('.betterImages').fadeOut(200);
    }, function () {
        betImg();
    });

    $('.bet').hover(function () {
        clearInterval(bet_timer);
    }, function () {
        betImg();
    });

    function betImg() {
        bet_timer = setInterval(function () {
            bet_cur++;
            if (bet_cur > 2) {
                bet_cur = 0;
            }
            $('.betterImages').eq(bet_cur).fadeIn(200).siblings('.betterImages').fadeOut(200);
            $('.betDoll li').eq(bet_cur).addClass('sec').siblings().removeClass('sec');
        }, 2000);
    }
    betImg();


    /* 排行榜*/
    $('.ranking .body>ul>li').hover(function () {
        var ranking_index = $(this).index();
        $(this).parent().siblings().eq(ranking_index).addClass('show').siblings().removeClass('show');
        $('.bar').stop().animate({ "left": ranking_index * 75 }, 100);
    }, function () {
        $('.bar').stop().animate({ "left": ranking_index * 75 }, 100);
    });
});
