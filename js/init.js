
(function(){
	$(".window-close-button").click(function(){
		var window = $(this).closest("div .window");
		window.hide();

		var task_button_id = window.attr('id')+'_task'
		$("#"+task_button_id).remove();

		$(".desktop-icon").removeClass("selected");
		$(".desktop-icon").removeClass("focused");
	});

	$(".desktop-icon").dblclick(function(){
		$(this).addClass("focused");

		if($(this).attr('window_id')){
			var window = $("#"+$(this).attr('window_id'));
			window.css("z-index","1");
			window.show();
		}

		if($(this).attr('task_button_id') && !$("#"+$(this).attr('task_button_id')).length>0){
			var task_button = '<button id="'+$(this).attr('task_button_id')+'" class="task button"><img class="icon" draggable="false" src="'+$(this).attr('task_button_icon_url')+'"><span class="title">'+$(this).attr('task_button_title')+'</span></button>'
			$("#tasks").append(task_button);
		}
	});

	$(".desktop-icon").click(function(){
		$(".desktop-icon").removeClass("selected");
		$(".desktop-icon").removeClass("focused");
		
		$(this).addClass("selected");
	});

	$(".window").click(function(){
		$(".window").css("z-index","0");
		$(this).css("z-index","1");
	});

})();
