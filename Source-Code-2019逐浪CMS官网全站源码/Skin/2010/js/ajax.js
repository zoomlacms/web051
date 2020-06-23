// JavaScript Document
function g(o){return document.getElementById(o);}
function HoverLi(n){
for(var i=1;i<=2;i++){g('tb_'+i).className='normaltab';g('tbc_0'+i).className='undis';}g('tbc_0'+n).className='dis';g('tb_'+n).className='hovertab';
}
function GetT()
{
var kdocTitle = document.title;//标题 
if(kdocTitle == null)
{ 
	var t_titles = document.getElementByTagName("title");
	if(t_titles && t_titles.length >0) 
	{ 
	   kdocTitle = t_titles[0]; 
	}else{ 
	   kdocTitle = ""; 
	} 
} 
//alert(kdocTitle);
document.getElementById("tii").innerText=kdocTitle;
}


// 纠错系统
function CorrectReport()
{
    kdocTitle = document.title;//标题 
    if(kdocTitle == null)
    { 
        var t_titles = document.getElementByTagName("title");
        if(t_titles && t_titles.length >0) 
        { 
           kdocTitle = t_titles[0]; 
        }else
        { 
           kdocTitle = ""; 
        }         
     }
     var url=window.location.href;
     var curl="/Prompt/correct.aspx?t="+kdocTitle+"&u="+url;
     window.location.href=curl;
}


//2013年末头部固定不掉
var IO=document.getElementById('scolls'),Y=IO,H=0,IE6;
IE6=window.ActiveXObject&&!window.XMLHttpRequest;
while(Y){H+=Y.offsetTop;Y=Y.offsetParent};
if(IE6)
    IO.style.cssText="position:absolute;top:expression(this.fix?(document"+
        ".documentElement.scrollTop-(this.javascript||"+H+")):0)";
window.onscroll=function (){
    var d=document,s=Math.max(d.documentElement.scrollTop,document.body.scrollTop);
    if(s>H&&IO.fix||s<=H&&!IO.fix)return;
    if(!IE6)IO.style.position=IO.fix?"":"fixed";        
    IO.fix=!IO.fix;
};
try{document.execCommand("BackgroundImageCache",false,true)}catch(e){};
 //]]>
 
 
 
//2012年末头部固定不掉
var IO=document.getElementById('nav_x'),Y=IO,H=0,IE6;
IE6=window.ActiveXObject&&!window.XMLHttpRequest;
while(Y){H+=Y.offsetTop;Y=Y.offsetParent};
if(IE6)
    IO.style.cssText="position:absolute;top:expression(this.fix?(document"+
        ".documentElement.scrollTop-(this.javascript||"+H+")):0)";
window.onscroll=function (){
    var d=document,s=Math.max(d.documentElement.scrollTop,document.body.scrollTop);
    if(s>H&&IO.fix||s<=H&&!IO.fix)return;
    if(!IE6)IO.style.position=IO.fix?"":"fixed";        
    IO.fix=!IO.fix;
};
try{document.execCommand("BackgroundImageCache",false,true)}catch(e){};
 //]]> //]]>