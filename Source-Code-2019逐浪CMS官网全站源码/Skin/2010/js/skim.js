// JavaScript Document
/*
 * skim(targetElement,option) 走马灯效果 
 * -targetElement:目标对象
 * -option:{
		transition:变换动作时间
		isAuto:是否自动播放
		effectType:按钮触发方式
		autoFill:是否自动填充
		autoInterval:自动播放间隔
		interval:每帧动画部分间隔
   }
   skim.setOption() 属性设置
   skim.setLeftBtn() 设置左按钮
   skim.setRightBtn() 设置右按钮
   skim.init() 函数执行
 * --------------------------------------------------------
 * example:
 * 完整版
	skim("#skimList",{
		transition:500,
		isAuto:true,
		autoFill:true,
		effectType:"click",
		AutoInterval:3000,
		interval:40
	}).setLeftBtn("#lt_btn").setRightBtn("#rt_btn").init();
 * 简版
	skim("#skimList",{effectType:"click"}).setLeftBtn("#lt_btn").setRightBtn("#rt_btn").init();
 * --------------------------------------------------------
 * power by jackNEss
 * date:2011-10-20
 * ver 1.0
 */

var skim = function(){
	
	//用户 设置 start 
	var option = {
		
		//变换动作时间
		transition:500,
		
		//是否自动播放
		isAuto:true,
		
		//按钮触发方式
		effectType:"click",
		
		//是否自动填充
		autoFill:true,
		
		//自动播放间隔
		autoInterval:3000,
		
		//每帧动画部分间隔
		interval:40

	}	
	//用户 设置 end
	
	
	var _op;
	var _targetElement;
	var _box,_outset,_cells;
	var _ltBtn,_rtBtn;
	var _cellChildWidth;
	var _scrollDistance;
	var _scrollKey,_autoRunKey;
	var _isHover = false;
	
	
	arguments[0]? _targetElement = easy_switch( arguments[0] ):"";
	arguments[1]? _op =arguments[1]:"";
	
	function easy_switch(elm){
		if(typeof elm == "string"){
			var strs = elm.split(" ");
			var targetElements = [document.body];
			for(var i = 0; i < strs.length; i++){
				if(!targetElements){return false;}
				var flagGroups = new Array();
				
				for(var j = 0; j < targetElements.length; j++ ){
					
					var datasource = typeSwitcher(targetElements[j],strs[i]);
					if(!datasource){return false;}
					if(!datasource.length){
						if(datasource){
							flagGroups.push(datasource);
						}
					}
					else{
						
						for(var k = 0; k < datasource.length; k++){
							if(datasource[k]){
								flagGroups.push(datasource[k])
							}
						}	
					}
					
				}
				targetElements = flagGroups;
			}
			if(targetElements.length ==1){return targetElements[0]}
			else {return targetElements;}
		}
		else{
			return elm;	
		}
		function typeSwitcher(elm,str){
			
			if(str.substring(0,1) == "#"){
				return document.getElementById( str.substring(1,str.length) )	
			}
			else if(str.substring(0,1) == "."){
				var flag = elm.getElementsByTagName("*");
				var results = [];
				var classStr = str.substring(1,str.length);
				var classNames;
				for(var i = 0; i < flag.length; i++ ){
					classNames = flag[i].className.split(" ");
					
					for( var j = 0; j < classNames.length; j++ ){
						if( classStr == classNames[j] ){
							results.push(flag[i]);	
						}
					}
				}
				return results;
			}
			else{
				var result = elm.getElementsByTagName(str)	
				if(result.length >0){
					return result;	
				}
				else{
					return false;	
				}
			}
		}
	}
	
	function getCssValue(obj,attribute){
		return obj.currentStyle?obj.currentStyle[attribute]:document.defaultView.getComputedStyle(obj,false)[attribute];	
	}
	
	//惯性运动
	function inertia_Motion(So,St,T){
		var S = Math.abs(St - So);
		var a = S/Math.pow(T/2,2);
		var Vt = a*T/4;
		
		
		return{
			Sn:function(Tn){
				var _Sn;
				Tn < T/2?(
					_Sn = So + a*Math.pow(Tn,2)/2 * ( parseInt( (St - So)/Math.abs(St - So) )||0 )
				):(
					Tn < T?(
						_Sn = So +  ( a*Math.pow(T/2,2)  - a*Math.pow(T - Tn,2)/2 )*( parseInt( (St - So)/Math.abs(St - So) )||0 )
					):(
						_Sn =  St
					)
				);
				
				return _Sn;
			},
			Vn:function(Tn){
				var _Vn;
				Tn < T/2?(
					_Vn = a*Tn/2
				):(
					Tn < T?(
						_Vn = Vt - a*(Tn - T/2)/2
					):(
						_Vn = 0
					)
				);
				return _Vn;
			}	
		}
	}
	
	//深度克隆
	function deepClone(elm){
		return elm.cloneNode(true);
	}
	
	function addEvent(elm,type,func){
		if(elm.attachEvent){
			elm.attachEvent("on" + type,_addEvent);
		}
		else if(elm.addEventListener){
			elm.addEventListener(type,_addEvent,false);
		}
		
		function _addEvent(){
			func.call(elm);
		}
		
		return _addEvent;
	}
	
	function removeEvent(elm,type,func){
		if(elm.detachEvent){
			elm.detachEvent("on" + type,func);
		}
		else if(elm.removeEventListener){
			elm.removeEventListener(type,func,false);
		}
	}
	
	//获取对象所占宽度,包括margin
	function getElmBoxWidth(elm){
		if(!elm){return;}
		return elm.offsetWidth + ( parseInt( getCssValue(elm,"marginLeft") )||0 ) +	( parseInt( getCssValue(elm,"marginRight") )||0 )
	}
	
	//结构初始化
	function areaReset(){
		var boxCssTxt,outsetCssTxt,cellsCssTxt;
		var frag,clonedCells;
		
		//初始化 box
		_box = document.createElement("box");
		boxCssTxt = "display:block; width:100%; overflow:hidden;";
		_box.style.cssText = boxCssTxt;
		
		//初始化 outset
		_outset = document.createElement("outset");
		outsetCssTxt = "display:block; width:10000px; overflow:hidden;"
		_outset.style.cssText = outsetCssTxt;
		
		//初始化 cell
		frag = document.createDocumentFragment();
		
		for(;_targetElement.childNodes.length > 0;){
			frag.appendChild( _targetElement.childNodes[0] );
		}
		
		_cells = document.createElement("cell");
		cellsCssTxt = "display:block; float:left;";
		_cells.style.cssText = cellsCssTxt;
		
		_targetElement.appendChild(_box);
		_box.appendChild(_outset);
		_outset.appendChild(_cells);
		_cells.appendChild(frag);
		
		
		if(_cells.offsetWidth == 0){return;}
		if( !option.autoFill && _cells.offsetWidth < _box.offsetWidth ){ return; }
		
		_cellChildWidth = getElmBoxWidth( _cells.children[0] )
		_scrollDistance = Math.floor( _box.offsetWidth/_cellChildWidth )*_cellChildWidth;
		
		_outset.appendChild( deepClone(_cells) );
		
		for(var i = 0; i < Math.ceil( _box.offsetWidth/_cells.offsetWidth) - 1;i++){
			_outset.appendChild( deepClone(_cells) );
		}
		
		if(option.isAuto){ 
			_outset.onmouseover = function(){
				_isHover = true;
			}
			_outset.onmouseout = function(){
				_isHover = false;
			}
			autoIntervalEvent();
		}
		
		if( _ltBtn ){
			addEvent(_ltBtn,option.effectType,scrollLeftEvent);
		}
		
		if( _rtBtn ){
			addEvent(_rtBtn,option.effectType,scrollRightEvent);
		}
	}
	
	//自动播放事件
	function autoIntervalEvent(){
		clearTimeout(_scrollKey);
		if(_isHover){
			_autoRunKey = setTimeout(function(){
				autoIntervalEvent();
			},option.autoInterval)
		}
		else{
			_autoRunKey = setTimeout(function(){
				scrollEvent(-_scrollDistance);
			},option.autoInterval)
		}
		
	}
	
	//向左事件
	function scrollLeftEvent(){
		clearTimeout(_scrollKey);
		clearTimeout(_autoRunKey);
		scrollEvent(_scrollDistance);
	}
	
	//向右事件
	function scrollRightEvent(){
		clearTimeout(_scrollKey);
		clearTimeout(_autoRunKey);
		scrollEvent(-_scrollDistance);
	}
	
	function scrollEvent(d){
		if(d == 0){return;}
		var So = parseInt(_outset.style.marginLeft)||0;
		var St = So + d;
		var T = option.transition/option.interval||0;
		var Tn = 0;
		
		_scrollEvent();
		
		function _scrollEvent(){
			Tn < T?(
				_outset.style.marginLeft = scrollCheck( inertia_Motion(So,St,T).Sn(Tn),_cells.offsetWidth ) + "px",
				Tn++,
				_scrollKey = setTimeout(_scrollEvent,option.interval)
			):(
				_outset.style.marginLeft = scrollCheck( St,_cells.offsetWidth ) + "px",
				getLeftDistance() == 0?(
					option.isAuto?autoIntervalEvent():""
				):(
					scrollEvent( getLeftDistance() )
				)
			);
			
		}
		
		//获取_box 最左侧 到 最左侧数起第一个 子元素 最左侧的 距离
		function getLeftDistance(){
			var So = parseInt(_outset.style.marginLeft)||0;
			var distance = 0;
			var residual = Math.abs(So%_cellChildWidth);
			
			if(residual > _cellChildWidth/2){
				distance = residual - _cellChildWidth;
			}
			else{
				distance = residual;
			}
			
			return distance;
			
		}
		
	}
	
	
	//循环检测确保无缝滚动
	function scrollCheck(scrollLeft,cellWidth){
		if(scrollLeft < 0){
			return scrollLeft%cellWidth;
		}
		else{
			return scrollLeft%cellWidth - cellWidth;
		}
	}
	
	return{
		
		//属性设置
		setOption:function(op){
			
			op.effectType?option.effectType = op.effectType:"";
			
			typeof op.isAuto == "bool"?option.isAuto = op.isAuto:"";
			typeof op.autoFill == "bool"?option.autoFill = op.autoFill:"";
			typeof op.autoInterval == "bool"?option.autoInterval = op.autoInterval:"";
			
			op.transition?option.transition = parseInt(op.transition):"";
			op.AutoRunTransition?option.AutoRunTransition = parseInt(op.AutoRunTransition):"";
			op.interval?option.interval = parseInt(op.interval):"";
			return this;
		},
		
		//设置左按钮
		setLeftBtn:function(elm){
			_ltBtn = easy_switch( elm );
			return this;
		},
		
		//设置右按钮
		setRightBtn:function(elm){
			_rtBtn = easy_switch( elm );
			return this;
		},
		
		//执行
		init:function(){
			if( _op){ this.setOption(_op);}
			if(!_targetElement){return;}
			areaReset();
		}	
	} 
}