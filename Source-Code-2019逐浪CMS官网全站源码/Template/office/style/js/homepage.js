function randOrd(){
    return (Math.round(Math.random())-0.5);
}

function in_arr(what, where) {
    for(var i=0; i<where.length; i++)
        if(what == where[i]) 
            return true;
    return false;
}

function setLogosMatrix(){
    var logosMatrix = new Array();
    var logosHTML = '';
    var durtn = 1000;
    for(i=0;i<58;i++){
	logosMatrix.push('logo'+(i+1)+'.gif');
    }
    var lines = new Array(10,14,24,34,44);
    var swtch = 0;
    logosMatrix.sort(randOrd);
    for(j=0;j<logosMatrix.length;j++){
	if(in_arr(j, lines)){
	    if(swtch == 1) swtch = 0;
		else swtch = 1;
	}
	if(swtch == 1){
	    if(j%2){
		logosHTML += '<li class="logos-second" style="visibility:hidden;background:url('+siteUrl+'img/homepage/2011/intro/'+logosMatrix[j]+') no-repeat 0 0;">&nbsp;</li>';
	    }else{
		//visible
		logosHTML += '<li class="logos-first" style="visibility:hidden;background:url('+siteUrl+'img/homepage/2011/intro/'+logosMatrix[j]+') no-repeat 0 0;">&nbsp;</li>';
	    }
	}else{
	    if(j%2){
		//visible
		logosHTML += '<li class="logos-first" style="visibility:hidden;background:url('+siteUrl+'img/homepage/2011/intro/'+logosMatrix[j]+') no-repeat 0 0;">&nbsp;</li>';
	    }else{
		logosHTML += '<li class="logos-second" style="visibility:hidden;background:url('+siteUrl+'img/homepage/2011/intro/'+logosMatrix[j]+') no-repeat 0 0;">&nbsp;</li>';
	    }
	}
	if(j==10){
	    logosHTML += '<li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li>';
	}
    }
    $('frameGrid').innerHTML = logosHTML;
    setTimeout(function(){
	$('hpSlogan').setStyle('opacity', 0).effect('opacity', {duration: 500}).start(1);
	$('mainBody').style.visibility = 'visible';
    },1000);
    setTimeout(function(){
	$$('.logos-first').each(function(logo){
	    logo.setStyle('opacity', 0).effect('opacity', {duration: durtn}).start(1);
	});
    },2000);
    setTimeout(function(){
	$$('.logos-second').each(function(logo){
	    logo.setStyle('opacity', 0).effect('opacity', {duration: durtn}).start(1);
	});
    },3000);
    setTimeout(function(){
	$('frameGrid').effect('opacity', {duration: 1700}).start(0);
    },5000);
    setTimeout(function(){
	$('hpIntro').effect('opacity', {duration: 1000, transition: Fx.Transitions.Sine.easeInOut, onComplete: function(){
	    $('hpIntro').style.display = 'none';
	    $('frameGrid').style.display = 'none';
	}}).start(0);
	homeSlides();
    },6000);

}

var slidesTimeOut = 7000;
var slidesDelay = 500;
var slides = $ES('li','homeSlider');
var slidesCount = slides.length;
var currSlide = 0;
var canSlide = true;
var currTimeout = null;
var slideEffect = null;

function homeSlides(){
    if(currSlide == 0){
	slides[0].setStyle('opacity', 0).effect('opacity', {duration: slidesDelay}).start(1);
    }
    currTimeout = setTimeout(function(){
	homeSlidesRotate();
    },slidesTimeOut);
}
function homeSlidesRotate(manual){
    if(canSlide){
	//canSlide = false;
	clearTimeout(currTimeout);
	if((currSlide+1) < slidesCount){
	    currSlide += 1;
	    slides[(currSlide-1)].effect('opacity', {duration: slidesDelay}).start(0);
	}else{
	    currSlide = 0;
	    slides[(slidesCount-1)].effect('opacity', {duration: slidesDelay}).start(0);
	}
	slides[(currSlide)].setStyle('opacity', 0).effect('opacity', {duration: slidesDelay,
	    onComplete: function(){
		canSlide = true;
	    }
	}).start(1);
	if(manual) clearTimeout(currTimeout);
	currTimeout = setTimeout(function(){
	    homeSlidesRotate();
	},slidesTimeOut);
    }
}

function setCookie(name, value, expires){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + expires);
    var c_value=escape(value) + ((expires==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=name + "=" + c_value;
}

function getCookie(name){
    var cook = document.cookie;
    var pos = cook.indexOf(name + '=');
    if(pos == -1){
	return null;
    } else {
	var pos2 = cook.indexOf(';', pos);
	if(pos2 == -1)
	    return unescape(cook.substring(pos + name.length + 1));
	else 
	    return unescape(cook.substring(pos + name.length + 1, pos2));
    }
}

/*var panes = $ES('li','upcomingSlider');
var itemsTotal = panes.length;
window.addEvent("domready", function() {  
     //var total_extensions = itemsTotal;
     var homePanes = new iCarousel("upcoming_cont", {  
         totalExtensions: itemsTotal,
         isfeatured: 0,
         idPrevious: "homeUpcomingPrev",  
         idNext: "homeUpcomingNext",  
         idToggle: "undefined",
         item: {  
             klass: "upcoming-item",  
             size: 231
         },  
         animation: {  
             type: "scroll",  // fade, scroll, fadeNscroll
             duration: 250,
	     direction: "top",
             amount: 1,
             rotate:{
                type: "auto",
                interval: 6000,
                onMouseOver: "stop"
             }
         }  
     });
});
*/

window.addEvent("domready", function() {
    /* Homepage intro */
    if(getCookie('homepage_intro')){
	var currCookie = parseFloat(getCookie('homepage_intro'));
	if(currCookie < 1){
	    setCookie('homepage_intro', (currCookie+1), 365);
	    setLogosMatrix();
	}else{
	    $('hpIntro').style.display = 'none';
	    $('mainBody').style.visibility = 'visible';
	    homeSlides();
	}
    }else{
	setCookie('homepage_intro', 1, 365);
	setLogosMatrix();
    }
    
    /* Homepage panes */
    var panes2 = $ES('li','trainingSlider');
    var itemsTotal2 = panes2.length;
    var panes3 = $ES('li','eventSlider');
    var itemsTotal3 = panes3.length;    
    var homePanes2 = new iCarousel("training_cont", {  
         totalExtensions: itemsTotal2,
         isfeatured: 0,
         idPrevious: "homeTrainingPrev",  
         idNext: "homeTrainingNext",  
         idToggle: "undefined",
         item: {  
             klass: "training-item",  
             size: 230
         },  
         animation: {  
             type: "scroll",  // fade, scroll, fadeNscroll
             duration: 250,
	     direction: "left",
             amount: 1,
             rotate:{
                type: "auto",
                interval: 6000,
                onMouseOver: "stop"
             }
         }  
     });
     
    var homePanes3 = new iCarousel("event_cont", {  
         totalExtensions: itemsTotal3,
         isfeatured: 0,
         idPrevious: "homeEventPrev",  
         idNext: "homeEventNext",  
         idToggle: "undefined",
         item: {  
             klass: "event-item",  
             size: 230
         },  
         animation: {  
             type: "scroll",  // fade, scroll, fadeNscroll
             duration: 250,
	     direction: "left",
             amount: 1,
             rotate:{
                type: "auto",
                interval: 6000,
                onMouseOver: "stop"
             }
         }  
     });
});