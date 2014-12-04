function swap(ctx, img, comp) {
	var mainComp = comp[0];

	for (var i = 0; i < comp.length; i++) {
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

		ctx.drawImage(img, mx, my, mw, mh, x, y, w, h);
	}
}

setOnLoadPicture(function(){
	var obj = getParameter();
	swap(obj.ctx, obj.img, obj.comp);
});


