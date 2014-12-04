setOnLoadPicture(function() {

	var parameter = getParameter();
	var comp = parameter.comp;
	var ctx = parameter.ctx;
	var img = parameter.img;

	for (var i = 0; i < comp.length; i++) {
		var x, y, h, w;
		x = comp[i].x;
		y = comp[i].y;
		w = comp[i].width;
		h = comp[i].height;
		ctx.fillRect(x, y + h * 0.3, comp[i].width, h * 0.2);

	}

	var msg1 = $("#msg1").val();
	var msg2 = $("#msg2").val();
	console.log(msg1);
	console.log(msg2);

	var w = 640;
	var h = 480;
	drawText(msg1, w * 0.3, h * 0.8, 20);
	drawText(msg2, w * 0.8, h * 0.2, 20);
	function drawText(text, x, y, fontsize) {
		var array = text.split("\n");
		var wh = 35;
		ctx.font = fontsize + "px 'ＭＳ Ｐゴシック'";
		ctx.fillStyle = "white";
		ctx.strokeStyle = "black";
		for (var i = 0; i < array.length; i++) {
			var length = getStringLength(array[i]);
			ctx.strokeText(array[i], 320 - (-x + fontsize * length / 2) / 2, y + wh * i);
			ctx.fillText(array[i], 320 - (-x + fontsize * length / 2) / 2, y + wh * i);
		}

	}

});
