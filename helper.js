var url_boxes = document.querySelectorAll(".url-box");
for (var i = 0; i < url_boxes.length; i++) {
	url_boxes[i].onclick=function (event) {
		chrome.tabs.create({"url":event.target.children[0].href})
	}
};