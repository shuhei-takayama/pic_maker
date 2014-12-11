function swap(ctx, img, comp, canvas) {
	var mainComp = comp[0];

	for (var i = 1; i < comp.length; i++) {
		var x, y, h, w;
		x = comp[i].x;
		y = comp[i].y;
		w = comp[i].width;
		h = comp[i].height;

		var mx, my, mw, mh;
		mx = mainComp.x;
		my = mainComp.y;
		mw = mainComp.width;
		mh = mainComp.height;

		ctx.beginPath();
		var scaleX = 1.4;
		var scaleY = 1.6;
		//ctx.scale(scaleX, scaleY);
		//ctx.arc(x+(w/2)-(scaleX-1)*(w/2), y+(h/2)-(scaleY-1)*(h/2), w/2, 0, Math.PI * 2, false);
		ctx.arc(x+(w/2), y+(h/2), w/2, 0, Math.PI * 2, false);
		ctx.clip();

		ctx.beginPath();
		/* 画像を指定 */
		//x=x/1.4;
		//y=y/1.6;
		ctx.drawImage(img, mx, my, mw, mh, x, y, w, h);
		console.log("gooood"+comp.length);
	}
}


setOnLoadPicture(function() {
	var obj = getParameter();
	swap(obj.ctx, obj.img, obj.comp);
});

