/****************************
**** 绑定事件兼容各个浏览器的写法
**** 参数：
**** 	element：代表要绑定事件的元素
**** 	type：要绑定的事件名，(不含“on”)
**** 	fn：绑定事件的函数
********************************/
function addEvent(element,type,fn){
	if(element.addEventListener){
		element.addEventListener(type,fn,true);
	}else if(element.attachEvent){
		element.attachEvent("on"+type,fn);
	}else{
		element["on"+type]=fn;
	}
}

/****************************
**** 移除事件兼容各个浏览器的写法
**** 参数：
**** 	element：代表要绑定事件的元素
****	type：要绑定的事件名，(不含“on”)
**** 	fn：绑定事件的函数
********************************/
function removeEvent(element,type,fn){
	if(element.removeEventListener){
		element.removeEventListener(type,fn,false);
	}else if(element.detachEvent){
		element.detachEvent("on"+type,fn);
	}else{
		element["on"+type]=null;
	}
}

/****************************
**** 取消冒泡兼容各个浏览器的写法
**** 参数：
**** 	ev: 要取消冒泡的事件对象
********************************/
function stopBubble(ev){
	if(ev && ev.stopPropagation){
		ev.stopPropagation();
	}else{
		ev.cancelBubble=true;
	}
}

/********************************
**** 获取计算后样式兼容的写法
**** 参数
****	element: 要获取样式的元素
****	key: 要获取的样式
**/ 

function getStyle(element,key,wei){
	if(element.currentStyle){
		return element.currentStyle[key];
	}else{
		if(wei==undefined){
			wei=null;
		}
		return getComputedStyle(element,wei)[key];
	}
}


/****************************
**** 取消冒泡兼容各个浏览器的写法
****/
function addMousewheel(ele,fn){
	if(navigator.userAgent.indexOf("Firefox")!=-1){
		// 火狐
		ele.addEventListener("DOMMouseScroll",fn,false);
	}else{
		// 谷歌、IE
		ele.onmousewheel=fn;
	}
}
