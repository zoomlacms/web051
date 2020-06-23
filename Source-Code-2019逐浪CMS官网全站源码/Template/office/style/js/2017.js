//For 2017 www.z01.com
console.log("%cZoomla!逐浪CMS-为匠者而生！"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:2em")
console.log("一个好网站，需要什么样的内核，才能支撑永续发展？\n一个好平台，需要什么样的技术，才能打通数据运维？\n专注技术，做坚强的WEB与移动开发内核；\n为匠者生，做中国互联网的鲁班和建筑师！\n");
console.log("免费下载 ：http://www.z01.com/pub");
console.log("模板资源 ：http://v.z01.com/mb");
console.log("H5与微站 ：http://v.z01.com/");
console.log("广告源码 ：http://ad.z01.com/");
console.log("团队风采 ：http://www.z01.com/corp/team");
console.log("案例展示 ：http://www.z01.com/case");
console.log("北京+上海+南昌12年研发团队 企业歌曲：http://www.z01.com/corp/music");
console.log("Zoomla!逐浪CMS官方下载：http://www.z01.com/pub");
console.log("逐浪字库-更优秀的中文开源字库：http://www.ziti163.com");
console.log("Webfont：http://www.ziti163.com/webfont");

//手机下菜单效果
$(function() {
	$('.home17_nav button.navbar-toggle').click(function(){
		$('body').toggleClass('out');
		$('nav.navbar-fixed-top').toggleClass('out');
		if ($('body').hasClass('out')) {
			$(this).focus();
		}
		else{
			$(this).blur();
		}
	});
});
$(document).click(function(e) {
	if (!$(e.target).closest('.navbar-collapse, button.navbar-toggle').length && $('body').hasClass('out')) {
		e.preventDefault();
		$('.home17_nav button.navbar-toggle').trigger('click');
	}
}).keyup(function(e) {
	if (e.keyCode == 27 && $('body').hasClass('out')) {
		$('.home17_nav button.navbar-toggle').trigger('click');
	} 
});

var vindex=0;
var videostr=[
	{
		title:"领先的门户与生产力平台开发软件",
		subtitle:"前瞻的H5技术加上丰富的开发组件-足以胜任一切WEB开发以及商务场景平台的建设。",
		videourl:"/Template/office/style/mp4/video1.mp4",
		tips:"<a href='/product/FuncList/'><i class='fa fa-eye'></i> 精彩模型丰富组件带来的自由开发</a>"
	},
	{
		title:"工匠精神·十二年传奇品质",
		subtitle:"最懂中国本土用户需求海量免费模板和资源-快速生成电脑手机平板全兼容的网站平台。",
		videourl:"/Template/office/style/mp4/video2.mp4",
		tips:"<a href='/product/'><i class='fa fa-eye'></i> 专业高端产品值得信赖</a>"
	},
	{
		title:"逐浪办公套件卓越出众",
		subtitle:"对,我们还提供办公系统生产力软件,优秀在线SAAS架构打破传统软件篱藩！",
		videourl:"/Template/office/style/mp4/video3.mp4",
		tips:"<a href='/OAS/'><i class='fa fa-eye'></i> 了解世界五百强亲睐的逐浪OA办公系统</a>"
	},
	{
		title:"做中国互联网的鲁班",
		subtitle:"全技术无销售,北京上海南昌三大开发中心潜心研发做时代的国民好软件。",
		videourl:"/Template/office/style/mp4/video4.mp4",
		tips:"<a href='/corp/team/'><i class='fa fa-eye'></i> 了解我们的菁英团队</a>"
	},
	{
		title:"所见所得随心开发真方便",
		subtitle:"不需要复杂技术,十分钟就能开发出高大上的网站及移动平台且便于维护。",
		videourl:"/Template/office/style/mp4/video5.mp4",
		tips:"<a href='/mtv/'><i class='fa fa-eye'></i> 教程中心</a>"
	}
]
$().ready(function(e) {
	//根据日期获取logo
	today = new Date();
	date1 = ''  + (today.getMonth() + 1 ) +  today.getDate() +  '';
	var days=((today.getDay()-1)%10);
	//底部背景
	$(".home17_footer").css("background","url(/Template/office/style/images/2017home_foot_bg"+days+".png) rgba(250, 250, 250,1) center no-repeat");
	$(".home17_footer").css("background-size","cover");
	//获取LOGO
	$("#logos").attr("src","/logo/"+date1+".svg");
	//初始化WOW.js
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		new WOW().init();
	};
	//版权年份
	var year="";
	var myyear=today.getYear();
	year=(myyear > 200) ? myyear : 1900 + myyear;
	$(".year_span").html(year);
	
	$(".home17_news_c").each(function(index, element) {
		$(this).attr("data-wow-delay",(0.5*(index+1))+"s");
    });
});
$(window).scroll(function(){
	if($(window).scrollTop()>0){
		$(".home17_nav").addClass("active")
	}
	else{
		$(".home17_nav").removeClass("active");
	}
});
function ShowMobileMenu(){
	$(".home17_mobilemenu_bg").fadeIn();;
	$(".home17_mobilemenu").addClass("active");
	$(".home17_mobilemenu_bg").click(function(){
		$(".home17_mobilemenu_bg").fadeOut();
		$(".home17_mobilemenu").removeClass("active");
	});
}
function HideMobileMenu(){
	$(".home17_mobilemenu_bg").fadeOut();
	$(".home17_mobilemenu").removeClass("active");
}
function ShowSearch(){
	$(".home17_search").fadeIn();
	$(".morphsearch").addClass("open");
	$(".home17_search_b").click(function(){
		$(".home17_search").fadeOut();
	});
}
function HideSearch(){
	$(".morphsearch").removeClass("open");
	$(".home17_search").fadeOut();
}
$(function(){
	if($(".container").width()>768){
		$(".home17_time").timelinr({
			autoPlay: 'true',
			autoPlayDirection: 'forward',
			autoPlayPause:5000
		});
	}
});
function ChangeVideo(){
	if(vindex<(videostr.length-1)){
		vindex++;
	}
	else{
		vindex=0;
	}
	console.log(vindex)
	$(".home17_banner1_t h3").html(videostr[vindex].title);
	$(".home17_banner1_t p").html(videostr[vindex].subtitle);
	$(".home17_banner1_vc video").attr("src",videostr[vindex].videourl);
	$(".home17_banner1_vp1").html(videostr[vindex].tips);
}
function scroll_news()//滚动updata
{
	$(function () {
		$('#dvmq li').eq(0).fadeOut('slow', function () {
			$(this).clone().appendTo($(this).parent()).fadeIn('slow');
			$(this).remove();
		});
	});
}
setInterval('scroll_news()',3000);
function HideNews(){
	$(".home17_official_c").slideToggle();
	console.log($(".home17_official").hasClass("active"))
	if($(".home17_official").hasClass("active")){
		$(".home17_official").removeClass("active");		
	}
	else{
		$(".home17_official").addClass("active");
	}
}
//在线客服
$(".home17_kefu li").mouseover(function(){
	$(this).siblings("li").removeClass("active");
	$(this).addClass("active");
}).mouseout(function(){
	$(this).removeClass("active");
});
$(".home17_kefu_ct i").click(function(){
	$(this).parent().parent().parent().removeClass("active");
});
$(".home17_kefu li:nth-child(4) a").click(function(){
	$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body')
	$body.animate({scrollTop:0},1000);
});

//自由拖动
var rDrag = {
	o:null,
	init:function(o){
		o.onmousedown = this.start;
	},
	start:function(e){
		var o;
		e = rDrag.fixEvent(e);
		e.preventDefault && e.preventDefault();
		rDrag.o = o = this;
		o.x = e.clientX - rDrag.o.offsetLeft;
		o.y = e.clientY - rDrag.o.offsetTop;
		document.onmousemove = rDrag.move;
		document.onmouseup = rDrag.end;
	},
	move:function(e){
		e = rDrag.fixEvent(e);
		var oLeft,oTop;
		oLeft = e.clientX - rDrag.o.x;
		oTop = e.clientY - rDrag.o.y;
		rDrag.o.style.left = oLeft + 'px';
		rDrag.o.style.top = oTop + 'px';
	},
	end:function(e){
		e = rDrag.fixEvent(e);
		rDrag.o = document.onmousemove = document.onmouseup = null;
	},
    fixEvent: function(e){
        if (!e) {
            e = window.event;
            e.target = e.srcElement;
            e.layerX = e.offsetX;
            e.layerY = e.offsetY;
        }
        return e;
    }
}
$().ready(function(e) {
    var obj = document.getElementById('home17_official');
	rDrag.init(obj);
});

//首页隐藏域点击显示
$(".home17_nav_ctc>ul>li>a").click(function(){
	$(this).parent().siblings("li").find("ul").slideUp();
	$(this).next("ul").slideToggle();
});