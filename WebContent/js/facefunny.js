//var endpoint = 'http://localhost:8080/axis2/services/face_funny';
var endpoint = '/axis2/services/face_funny';
var parameter = null;
function isHankaku(str) {
	return str.match(/^(\w| |'|,|&)+$/);
}

function getStringLength(str) {
	if (str == "") {
		return 0;
	} else {
		var head = str[0];
		var tail = str.slice(1);
		if (isHankaku(head)) {
			return 1 + getStringLength(tail);
		} else {
			return 2 + getStringLength(tail);
		}
	}
}

var actionOnLoad;

function setOnLoadPicture(action) {
	actionOnLoad = action;
}

function loadPicture(picURL) {
	function resizeCanvas(image, canvas) {
		document.body.appendChild(image);
		canvas.width = image.offsetWidth;
		canvas.style.width = image.offsetWidth.toString() + "px";
		canvas.height = image.offsetHeight;
		canvas.style.height = image.offsetHeight.toString() + "px";
		console.log(canvas);
		document.body.removeChild(image);
	}

	function showMsg(msg) {
		document.getElementById("msg").innerHTML = msg;
	}

	var comp;
	var canvas = document.getElementById('src');
	var ctx = canvas.getContext('2d');

	var img = new Image();
	img.src = picURL;

	console.log(ctx);
	img.onload = function() {
		resizeCanvas(img, canvas);

		var s = (new Date()).getTime();
		showMsg("Detecting ...");

		ctx.drawImage(img,0,0);

		// 顔検出
		comp = ccv.detect_objects({
			"canvas" : ccv.grayscale(ccv.pre(img)),
			"cascade" : cascade,
			"interval" : 5,
			"min_neighbors" : 1
		});

		parameter = {
			ctx : ctx,
			img : img,
			comp : comp,
			canvas : canvas
		};

		console.log(comp);
		if (actionOnLoad != null) {
			actionOnLoad();
		}

	};

}


function getParameter() {
	console.log(parameter);
	return parameter;
}

