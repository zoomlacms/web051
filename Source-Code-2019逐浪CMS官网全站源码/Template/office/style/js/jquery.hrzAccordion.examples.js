
jQuery(document).ready(function() {
  
	jQuery(".box").hrzAccordion({containerClass     : "container",
			listItemClass      : "scene",
			contentWrapper     : "contentWrapper",
			contentInnerWrapper: "contentInnerWrapper",
			handleClass        : "handle",
			handleClassOver    : "handleOver",
			handleClassSelected: "handleSelected"
							  });

	

		
	jQuery('.box li').click(function(){
		jQuery('.mqparty-content').removeClass('fold').addClass('show_cont');
		jQuery('.medal').addClass('metal2');
		jQuery('.back_home').show();
		});
	jQuery('.free').hover(function(){
		jQuery('.line1').animate({width:"60px"}, "slow");
		});	
	jQuery('.free').mouseleave(function(){
		jQuery('.line1').animate({width:"0"}, "fast");
		});	
	jQuery('.attention').hover(function(){
		jQuery('.line2').animate({width:"60px"}, "slow");
		});	
	jQuery('.attention').mouseleave(function(){
		jQuery('.line2').animate({width:"0"}, "fast");
		});	
	jQuery('.back_home').click(function(){
		jQuery('.mqparty-content').removeClass('show_cont').addClass('fold');
		jQuery('.medal').removeClass('metal2');
		jQuery('.back_home').hide();
		jQuery('.contentContainer').animate({width:"0", opacity:"0"},"fast").attr({rel:""});
		jQuery('.contentWrapper').animate({width:"0"},"fast");
		jQuery('.handle').removeClass('handleSelected').attr({rel:""});
		});
		
	//勋章触发
	jQuery('.medal').mouseover(function(){
		jQuery(this).addClass('metal_hover');
		});
	jQuery('.medal').mouseleave(function(){
		jQuery(this).removeClass('metal_hover');
		});

   //抽奖
	jQuery('.join_in1').click(function(){
		jQuery('.lottery1').animate({height:"552px", paddingTop:"45px"}, "fast");
		});	
	jQuery('.show_btn1').click(function(){
		jQuery('.lottery1').animate({height:"0", paddingTop:"0"}, "fast");
		});	
	jQuery('.join_in2').click(function(){
		jQuery('.lottery2').animate({height:"620px", paddingTop:"57px"}, "fast");
		});	
	jQuery('.show_btn2').click(function(){
		jQuery('.lottery2').animate({height:"0", paddingTop:"0"}, "fast");
		});	
		
	//使ie6兼容min-width、max-width
	jQuery.fn.extend({
	wMinMax:function(){
		jQuery(this).each(function(){
				var bd=parseInt(jQuery(this).css("border-width"))*2;
				var wMin=jQuery(this).css("min-width");
				var wMax=jQuery(this).css("max-width")
				var trueW=bd ? jQuery(window).width()-bd : jQuery(window).width();			
				var minW=wMin ? parseInt(wMin) : 0;			
				var maxW=wMax ? parseInt(wMax) : trueW;			
				minW<trueW && trueW<maxW ? jQuery(this).width(trueW+"px"):
				minW>trueW ? jQuery(this).width(minW+"px") : jQuery(this).width(maxW+"px");			
			})
			return this;
		}	
	});

   
});
 
function animate(){
	jQuery('.line_light').animate({width:"87px"}, 2000).fadeOut("slow");
	}
function delayPic(){
	jQuery('.banner1_1_1').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner1_1_1+++.jpg)');
	jQuery('.banner1_1_2').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner1_1_2.jpg)');
	jQuery('.banner1_1_3').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner1_1_3.jpg)');
	jQuery('.banner1_1_4').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner1_1_4.jpg)');
	jQuery('.banner1_2_1').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner1_2_1+++.jpg)');
	jQuery('.banner1_2_2').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner1_2_2.jpg)');
	jQuery('.banner1_2_3').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner1_2_3.jpg)');
	jQuery('.banner1_2_4').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner1_2_4.jpg)');
	jQuery('.banner1_3_1').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner1_3_1+++.jpg)');
	jQuery('.banner1_3_2').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner1_3_2.jpg)');
	jQuery('.banner1_3_3').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner1_3_3.jpg)');
	jQuery('.banner1_3_4').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner1_3_4.jpg)');
	jQuery('.defend_bg2').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner3_2.jpg)');
	jQuery('.defend_bg3').css('background-image','url(http://source2.qq.com/a/mq4.0/act/120712_emotion/images/banner3_3.jpg)');
}