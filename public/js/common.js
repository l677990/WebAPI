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