
(function(){
	$("#blog-window-close").click(function(){
		$("#blog-window-task").hide();
		$("#blog-window").hide();
		$("#blog-desktop-icon").removeClass("selected");
		$("#blog-desktop-icon").removeClass("focused");
	});

	$("#blog-desktop-icon").dblclick(function(){
		$("#blog-window-task").show();
		$("#blog-window").show();
		$("#blog-desktop-icon").addClass("focused");
	});

	$(".desktop-icon").click(function(){
		$(".desktop-icon").removeClass("selected");
		$(".desktop-icon").removeClass("focused");
		$(this).addClass("selected");
	});

})();
