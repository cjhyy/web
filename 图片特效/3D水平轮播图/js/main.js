	// 上一张
	function previmg(){
		cArr.unshift(cArr[6]);
		cArr.pop();
		//i是元素的索引，从0开始
		//e为当前处理的元素
		//each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
		$("li").each(function(i,e){
			$(e).removeClass().addClass(cArr[i]);
		})
		index--;
		if (index<0) {
			index=6;
		}
		show();
	}

	//下一张
	function nextimg(){
		cArr.push(cArr[0]);
		cArr.shift();
		$("li").each(function(i,e){
			$(e).removeClass().addClass(cArr[i]);
		})
		index++;
		if (index>6) {
			index=0;
		}
		show();
	}

	//通过底下按钮点击切换
	

	//改变底下按钮的背景色
	function show(){
			$($s).eq(index).addClass("select").parent().siblings().children().removeClass("select");
	}

	