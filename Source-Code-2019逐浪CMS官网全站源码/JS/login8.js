	function $en(tit){return encodeURIComponent(tit)}
 
	$(".xinlan").click(function(){
		window.open('http://weibo.com/zoomla');
	})
	$(".tenxun").click(function(){
		window.open('http://e.t.qq.com/wwwwzf');
	})
	$(".homes").click(function(){
		window.open('/index.shtml');
	})
	$(".downs").click(function(){
		window.open('/down/3116.shtml');
	})

	var h=$(window).height();
	var w=$(window).width();
	//var h1=(h1-500<30?30:h-580)+"px";
	//$(".divtop").css("bottom",h1);

	$(".back").css("height",h+"px");
	$(".nag").css("top",$(window).scrollTop() + 250 +"px");

	$(".yutop").css("top",(h+150)+"px");
	$("#hjimg").css("top",(h+430)+"px");
	
	var yueAnimate={
		lbyFun:function(){
			$("#n11img").css({"width": "65px","height": "5px","top": "300px","margin-left": "-32px","opacity":"0"});
			$("#n12img").css({"opacity":"0"});
			$("#n1p").css({"opacity":"0"});
			
			var y=460;

			$("#n12img").animate({
				"opacity": 1
			},800,'easeInCubic');
			$("#n1p").animate({
				"opacity": 1
			},800,'easeInCubic',function(){
				$("#n11img").animate({
					"opacity": 0.8,
					"width":"328px",
					"height":"27px",
					"top": "275px",
					"margin-left":"-164px"
				},400,'easeInCubic',function(){
					$("#n11img").animate({
						"opacity": 1,
						"width":"273px",
						"height":"22px",
						"top": "285px",
						"margin-left":"-137px"
					},200,"easeInCubic")
				});
			});
		},
		btntop :function(){

			$("#btntop").css({"margin-top": "0px"});
			$("#btntop").animate({
				"margin-top": "30px"
			},1000,'easeOutBounce');
			
		},
		yue :function(id,left,right,time){
			$(id).animate({
				"margin-left": right
			},time,function(){
				$(id).animate({
					"margin-left": left
				},time);
			});
		},
		hjFun:function(){
			$("#hjimg").css("top",($(window).height()+430)+"px");
			$("#hjimg").css("margin-left","-824px");
			$("#n2yue1").css("margin-left","-560px");
			$("#n2yue2").css("margin-left","55px");
			$("#hjimg").animate({
				"top": "230px",
				"margin-left":"-340px"
			},1000,'easeInOutQuint');
		},
		yuFun:function(){
			var x=$(window).width()/2-500+210;
			x=x<210?210:x;
			var y=460;
			$(".yutop").css("top",(h+150)+"px");
			$(".yu1").css({"left": "50px","top": "260px"});
			$(".yu2").css({"left": "250px"});
			$(".yu3").css({"left": "450px"});
			$(".yu4").css({"left": "650px"});
			$(".yu1").animate({
				"left": x-170+"px",
				"top":"384px"
			},1000,'easeInCubic');
			$(".yu2").animate({
				"left": x-160+"px",
				"top":"479px"
			},1000,'easeInCubic');
			$(".yu3").animate({
				"left": x-55+"px",
				"top":"509px"
			},1000,'easeInCubic');
			$(".yu4").animate({
				"left": x+38+"px",
				"top":"468px"
			},1000,'easeInCubic');
		},
		n5imgFun:function(){
			$("#n5img").css({"width": "20px","height": "16px","top": "570px","margin-left": "75px","opacity":"0"});
			var y=460;
			$("#n5img").animate({
				"opacity": 0.5,
				"width":"350px",
				"height":"276px",
				"top": "350px",
				"margin-left":"-70px"
			},800,'easeInBack',function(){
				$("#n5img").animate({
					"opacity": 1,
					"width":"320px",
					"height":"252px",
					"top": "360px",
					"margin-left":"-60px"
				},300,"easeInBack")
			});
		}
	}
	
	//鼠标滚动事件 
	var shubiao=true;
	var wheel = function(event) {  
		var delta = 0;  
		if (!event)
			event = window.event;  
		if (event.wheelDelta) {
			delta = event.wheelDelta / 120;
		} else if (event.detail) {
			delta = -event.detail / 3;
		}
		if (delta) handle(delta);
		if (event.preventDefault) event.preventDefault();  
		event.returnValue = false;  
	}
	if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
	document.onmousewheel = wheel;
	var $f=true;
	var handle = function(delta) {
		if(!shubiao) return;
		shubiao=false;
		var random_num = Math.floor((Math.random() * 100) + 50);
		if (delta < 0) {
			PicWheelScroll(1);
			$f=false;
			 //console.log("鼠标滑轮向下滚动：" + delta + "次！"); // 1  
			return false;  
		} else {
			$f=true;
			PicWheelScroll(0);
			//console.log("鼠标滑轮向上滚动：" + delta + "次！"); // -1  
			return false;  
		}
	}
	$(".ac").each(function(i){
		$(this).click(function(){
			$(".ac").removeClass("active");
			$(".ac").eq(i).addClass("active");
			var num=i+1;
			if(num=="5") $("#btntop").hide();
			else $("#btntop").show();
			gotoAnchor($(".a"+num));
			getAnchroFun(num);
		})
	})
	var PicWheelScroll = function(n){
		
		var num=$("#pic1").attr("num");
		
		if((num===5&&n===1) || (num===1&&n===0)) return;
		if(n==1){
			if(num<5) num++;
		}else{
			if(num>1) num--;
		}

		$(".ac").removeClass("active");
		$(".ac").eq(num-1).addClass("active");

		if(num=="5") $("#btntop").hide();
		else $("#btntop").show();
		gotoAnchor($(".a"+num));
		getAnchroFun(num);
	}

	yueAnimate.yue("#n1yue3","-510px","-150px",10000);
	yueAnimate.yue("#n2yue1","-560px","-375px",10000);
	yueAnimate.yue("#n2yue2","55px","260px",10000);
	yueAnimate.yue("#n4yue1","-240px","-160px",10000);
	yueAnimate.yue("#n4yue2","120px","230px",10000);
	setInterval(function(){
		yueAnimate.yue("#n1yue3","-510px","-300px",10000);

		yueAnimate.yue("#n2yue1","-560px","-375px",10000);
		yueAnimate.yue("#n2yue2","55px","260px",10000);

		yueAnimate.yue("#n4yue1","-240px","-160px",10000);
		yueAnimate.yue("#n4yue2","120px","230px",10000);
	},22000);

	setInterval(yueAnimate.btntop,2000);
	var getAnchroFun=function(num){
		var h=$(window).height();
		var h=(h-500<30?30:h-580)+"px";
		$(".divtop").css("bottom","30px");
		var n=$("#pic1").attr("num");
		switch(parseInt(num)){
			case 1:
				if(n==1&&$f) return false;
				yueAnimate.lbyFun();
				break;
			case 2:
				yueAnimate.yuFun();
				break;
			case 3:
				yueAnimate.n5imgFun();
				break;
			case 4:
				break;
		}
		$("#pic1").attr("num",num);
	}
	var gotoAnchor = function(selector,isauto){
		var anchor = $(selector);
		if (anchor.length < 0) return;
		var $win=$(window);
		var $body = $(window.document.documentElement);
		var ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf("webkit") > -1) {
			$body = $(window.document.body)
		}
		var pos=anchor.offset();
		if (isauto) {
			var t = pos.top - $win.scrollTop(); //相对于屏幕显示区
			var t2 = $win.height() - t;
			if (t2 < anchor.outerHeight()) {
				$body.animate({"scrollTop": pos.top}, "normal");
			}
			return;
		}
		$body.animate({"scrollTop": pos.top},{queue :false,complete: function(){shubiao=true;}});
	}
	gotoAnchor($(".a1"));
	yueAnimate.lbyFun();
	$(window).resize(function(){
		var h=$(window).height();
		$(".back").css("height",h+"px");
		var n=$("#pic1").attr("num");
		var h1=(h-500<30?30:h-580)+"px";
		//if(n==1) $(".divtop").css("bottom",h1);
		//else 
		$(".divtop").css("bottom","30px");
		gotoAnchor($(".a"+n));
	});
	$(".divtop").click(function(){
		var n=$("#pic1").attr("num");
		if(n=="3") $("#btntop").hide();
		n=parseInt(n)+1;
		if(n==5) {return;}
		$(".ac").removeClass("active");
		$(".ac").eq(n-1).addClass("active");
		gotoAnchor($(".a"+n));
		getAnchroFun(n);
		$("#pic1").attr("num",n);
	})