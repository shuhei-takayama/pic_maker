function lieMaker(ctx, img, comp) {
	for (var i = 0; i < comp.length; i++) {
		var x, y, h, w;
		x = comp[i].x;
		y = comp[i].y;
		w = comp[i].width;
		h = comp[i].height;
		ctx.drawImage(img, x, y + h * 0.3, w, h * 0.2, x, y + h * 0.26, w, h * 0.31);
	}
}

var startX=0;
var startY=0;
var mousedown=false;

setOnLoadPicture(function() {
	var obj = getParameter();
	lieMaker(obj.ctx, obj.img, obj.comp);

	var canvas = obj.canvas;
	canvas.onmousedown = function(e) {

		var rect = e.target.getBoundingClientRect();
		var mouseX = Math.round(e.clientX - rect.left);
		var mouseY = Math.round(e.clientY - rect.top);

		startX = mouseX;
		startY = mouseY;
		mousedown = true;
		console.log(startX, startY);
	};

	canvas.onmousemove = function(e) {
		var rect = e.target.getBoundingClientRect();
		var mouseX = Math.round(e.clientX - rect.left);
		var mouseY = Math.round(e.clientY - rect.top);
		if (mousedown) {
			draw(mouseX, mouseY);
		}

		canvas.onmouseup = function(e) {
			mousedown = false;
		};
	};
	//描画処理//

	function draw(x, y) {
		var context = obj.ctx;
		context.beginPath();
		context.moveTo(startX, startY);
		context.lineTo(x, y);
		context.closePath();
		context.stroke();

		//次の座標の出発点を設定
		startX = x;
		startY = y;
	}

});

