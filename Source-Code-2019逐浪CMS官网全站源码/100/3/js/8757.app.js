// 本地化命名空间
var utils = convage_mobile.utils,
	controllers = convage_mobile.controllers,
	website = convage_mobile.website,
	cpage = 1
// 模板

function tplMmInfo(array, items){
	for(var i in items){
		var item = items[i]
		var	memo = '&nbsp;人气:&nbsp;' + item.allVisiteCount + '&nbsp;&nbsp;&nbsp;&nbsp;城市：&nbsp;' + item.nowCity + '&nbsp;&nbsp;&nbsp;&nbsp;星座:&nbsp; ' + item.constellation 
		var	li = '<li  data-icon="false"><a href="#discussion" data-id="'+ item.userId +'"><img src="'+ website + item.headPic +'"/><h3>' + item.nick + '</h3><p>'+ memo +'</p></a></li>'
		array.push(li)
	}
}

var refreshList = function(clear_flag){
	var $listview = $('#index').find('ul[data-role="listview"]')
	$('#div_loading').css('display', 'block')
	if(clear_flag){
		$listview.html('')	
	}
	$.getJSON(
			utils.uuUrlGen(website + '/mclient/m!mmList.jhtml?callback=?'),
			{
				cpage: cpage,
				type: $('#select_type').val()
			},
			function(data) {
				var json = data[0]					
				var li_array = []
				tplMmInfo(li_array, json.result)				
				if(clear_flag){
					$listview.html(li_array.join(''))	
				}else{
					$listview.append(li_array.join(''))				
				}
				$listview.listview('refresh')	
				
				cpage ++
				
				$('#div_loading').css('display', 'none')
			}
	  );
				
	
}

controllers.index = {
	pagecreate : function(event){
		refreshList(true);
		$("#getMore").bind( "click", function(event, ui) {
			refreshList(false);
		}); 
		$("#select_type").bind( "change", function(event, ui) {
			cpage = 1;
			refreshList(true);
		});
	}
}

var pages = [
	{id: 'index', event:'pagecreate'}
]
convage_mobile.run(pages)