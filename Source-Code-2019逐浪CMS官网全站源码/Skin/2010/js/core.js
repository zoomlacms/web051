function getId(id){return typeof id == "string" ? document.getElementById(id) : id;}
function getElementsByClassName (className, parentElement){
        if (typeof(parentElement)=='object') {
            var elems = parentElement.getElementsByTagName("*");
        } else {
            var elems = (document.getElementById(parentElement)||document.body).getElementsByTagName("*");
        }
        var result=[];
        for (i=0; j=elems[i]; i++) {
           if ((" "+j.className+" ").indexOf(" "+className+" ")!=-1) {
	            result.push(j);
           }
        }
        return result;
}
	    
function moveElement(elem, final_x, final_y, interval){
    if (!elem.style.left) elem.style.left = "0px";
    if (!elem.style.top) elem.style.top = "0px";
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y){ if (elem.movement) clearTimeout(elem.movement);return true;}
    if (xpos < final_x) {var dist = Math.ceil((final_x - xpos) / 1.2);xpos = xpos + dist;}
    if (xpos > final_x) {var dist = Math.ceil((xpos - final_x) / 1.2);xpos = xpos - dist;}
    elem.style.left = xpos + "px";elem.style.top = ypos + "px";
    elem.movement = setTimeout(function(){moveElement(elem, final_x, final_y, interval)}, interval);
}

function tab(id)
{   
    id = typeof id == "string" ? getId(id) : id;
	var tabNavs = getElementsByClassName("hd",id)[0].getElementsByTagName("li");
	var tabBodys = getElementsByClassName("main", id); 
	if(tabNavs.length!=tabBodys.length)
	{
		return false;
	}
	tabBodys[0].style.display = "block";
	for (i = 0; i < tabNavs.length; i++) {
            (function(i){
                tabNavs[i].onclick = function(){
                    for (j = 0; j < tabNavs.length; j++) {
                        tabNavs[j].className = "";
                        tabBodys[j].style.display = "none";
                    }
                    this.className = "selected";
                    tabBodys[i].style.display = "block";
                    return false;
                }
            })(i);   
	}
}