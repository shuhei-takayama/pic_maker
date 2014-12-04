		var a;
		navigator.getUserMedia = navigator.getUserMedia
				|| navigator.webkitGetUserMedia
				|| window.navigator.mozGetUserMedia;
		window.URL = window.URL || window.webkitURL;

		var localStream = null;
		navigator.getUserMedia({
			video : true,
			audio : false
		}, function(stream) {// for success case
			$('#video').attr('src', window.URL.createObjectURL(stream));
		}, function(err) {// for error case
			console.log(err);
		});
		var picURL;
		$('#shot').click(function() {
			// ビデオを止める
			$('#video').get(0).pause();

			// canvasにビデオの内容を書き込む
			var canvas = document.createElement('canvas');
			var image = $('#video').get(0);
			canvas.width = image.videoWidth;
			canvas.height = image.videoHeight;

			canvas.getContext('2d').drawImage(image, 0, 0, image.videoWidth, image.videoHeight);
			console.log(canvas.toDataURL());
			loadPicture(canvas.toDataURL());
		});