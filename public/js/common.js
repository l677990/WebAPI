//获取id
function my$(id) {
	return document.getElementById(id);
}

//处理浏览器兼容问题
//获取第一个子元素

 function getElementChild(elem) {
                var node, nodes = elem.childNodes, i = 0;
                while (node = nodes[i++]) {
                    if (node.nodeType === 1) {
                        return node;
                    }
                }
                return null;
            }

//处理innerText和textContent的兼容性问题
//设置标签之间内容
 function setInnerText(element, content) {
 	//判断当前浏览器是否支持innerText
 	if (typeof element.innerText == 'string') {
 		element.innerText = content;
 	} else {
 		element.textContent = content;
 	}
 }

 //处理注册事件的兼容性问题
 //eventName,不带on click  mouseover mouseout
 function addEventListener(element, eventName, fn) {
 	if(element.addEventListener) {
 		element.addEventListener(eventName,fn);
 	} else if (element.attachEvent) {
 		element.attachEvent('on' + eventName,fn);
 	} else {
 		element['on' + eventName] = fn;
 	}
 }

 //移除事件的兼容性处理
 function removeEventListener(element,eventName,fn) {
 	if (element.removeEventListener) {
 		element.removeEventListener(eventName, fn);
 	} else if (element.detachEvent) {
 		element.detachEvent('on' + eventName, fn);
 	} else {
 		element['on' + eventName] = null;
 	}
 }


 //getScroll 函数名 获取页面滚动距离的浏览器兼容问题 获取页面滚动出去的距离
 function getScroll() {
 	var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
 	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
 	return {
 		scrollLeft: scrollLeft,
 		scrollTop: scrollTop
 	}
 }

 //获取鼠标在页面中的位置，处理浏览器兼容问题
 function getPage(e) {
 	var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
 	var pageY = e.pageY || e.clientY + getScroll().scrollTop;
 	return {
 		pageX : pageX,
 		pageY : pageY
 	}
 }

 //获取两个日期的时间差
 function getInterval(start,end) {
 	//两个日期对象，相差的毫秒数
 	var interval = end - start;
 	//求相差的天数/小时数/分钟数/秒数
 	var day,hour,minute,second;

 	//interval = interval / 1000;
 	//因为获取的是毫秒，再除1000获取秒
 	interval /= 1000;

 	day = Math.round(interval / 60 / 60 / 24);
 	hour =Math.round(interval / 60 / 60 % 24);
 	minute = Math.round(interval / 60 % 60);
 	second = Math.round(interval % 60);

 	return {
 		day : day,
 		hour : hour,
 		minute : minute,
 		second : second
 	}
 }