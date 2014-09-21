var url_boxes = document.querySelectorAll(".url-box");
for (var i = 0; i < url_boxes.length; i++) {
	url_boxes[i].onclick=function (event) {
		chrome.tabs.create({"url":this.children[0].textContent})
	}
};