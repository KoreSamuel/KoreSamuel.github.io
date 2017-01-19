var typing = new Typing({
    source: document.getElementById('intro-text'),
    output: document.getElementById('intro-text-output'),
    delay: 50
  });
$("#switch").click(function () {
	if ($("#fullpage").hasClass("night")) {
		$("#fullpage").removeClass("night");
		$("#switch").removeClass("switched");
	}
	else {
		$("#fullpage").addClass("night");
		$("#switch").addClass("switched");
	}
});
typing.start();