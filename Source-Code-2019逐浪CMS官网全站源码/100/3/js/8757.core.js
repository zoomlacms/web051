// 全局命名空间
var convage_mobile = {
	author : 'Convage Inc.',
	version: '1.0',
	website: 'http://www.8757.com'
}
// 工具包
convage_mobile.utils = {
	setParam : function (name,value){
		localStorage.setItem(name,value)
	},
	getParam : function(name){
		return localStorage.getItem(name)
	},
	uuUrlGen: function (url){
		var uuUrl;
		var xcharset = document.all?"GBK":"UTF-8";
		if (url.indexOf("?") >= 0){
			uuUrl = url + "&xcharset=" + xcharset + "&ran=" + Math.random();
		}else{
			uuUrl = url + "?xcharset=" + xcharset + "&ran=" + Math.random();
		}
		return uuUrl;
	} 
}
// 业务控制中心，需应用实现
convage_mobile.controllers = {}
// 事件注册
convage_mobile.run = function(pages){
	var pages = pages,
	count = pages.length;
	for(var i=0;i<count;i++){
		var page = pages[i],
			id = page.id
			e_array = page.event.split(',')
		for(var j=0; j <e_array.length;j++){
			var e = e_array[j]
			if($.trim(e).length == 0)
				continue
			$('#'+id).live(e, convage_mobile.controllers[id][e])
		}
	}
}