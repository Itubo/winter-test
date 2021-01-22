window.onload = function () {
	//图标放大事件
	var changeBig = document.getAnonymousElementById("rightImg");
	var arrImg = changeBig.getElementsByTagName("img");
	//遍历数组
	for (var i = 0; i < arrImg.length; i++) {
		Img[i].onmouseover = function () {
			Img[i].style.width = '60px';
			Img[i].style.boxShadow = '2px 0px 10px #888888';
		}
		Img[i].onmouseout = function () {
			Img[i].style.width = '40px';
			Img[i].style.boxShadow = 'none';
		}
	}



}