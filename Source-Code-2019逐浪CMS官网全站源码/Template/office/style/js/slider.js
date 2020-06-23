var iPhone = document.getElementById("iphone");
var oLock = document.getElementById("lock");
var oBtn = oLock.getElementsByTagName("span")[0];
var disX = 425;
  var maxL = oLock.clientWidth - oBtn.offsetWidth;

oBtn.onmousedown = function (e)
{
	var e = e || window.event;
	disX = e.clientX - this.offsetLeft;
	
	document.onmousemove = function (e)
	{
		var e = e || window.event;
		var l = e.clientX - disX;
		
		l < 0 && (l = 0);
		l > maxL && (l = maxL);
		
		oBtn.style.left = l + "px";
		oBtn.offsetLeft == 0 && (iPhone.className = "trigger light");
		return false;
	};
	document.onmouseup = function ()
	{
		document.onmousemove = null;
		document.onmouseup = null;
		oBtn.releaseCapture && oBtn.releaseCapture();
		
		oBtn.offsetLeft == 0 && (iPhone.style.display = "none", document.getElementById("home_cont").className = "mqparty-content fold", animate(), delayPic());
		
		startMove(425)
	};
	this.setCapture && this.setCapture();
	return false
};
function startMove (iTarget, onEnd)
{
	clearInterval(oBtn.timer);
	oBtn.timer = setInterval(function ()
	{
		doMove(iTarget, onEnd)
	}, 30)
}
function doMove (iTarget, onEnd)
{
	var iSpeed = (iTarget - oBtn.offsetLeft) / 5;
	iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
	iTarget == oBtn.offsetLeft ? (clearInterval(oBtn.timer), onEnd && onEnd()) : oBtn.style.left = iSpeed + oBtn.offsetLeft + "px"
}

setTimeout(
	function(){
		window.onload = tload;
	},5000
)
function tload(){
	iPhone.style.display = "none";
	document.getElementById("home_cont").className = "mqparty-content fold"; 
	animate(); 
	delayPic();
}



