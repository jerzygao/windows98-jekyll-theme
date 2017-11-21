
(function(){
	if(document.referrer){
		$("#blog_frame").attr('src',document.referrer);
	};

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

	$(".category_tag").click(function(){
		$(".cat_post").hide();
		var cat_post_show_selecter = "[category='category_name']";
		cat_post_show_selecter = cat_post_show_selecter.replace("category_name",$(this).attr('category_name'));
		var cat_post_show = $("#cat_post_list").find(cat_post_show_selecter);
		cat_post_show.show();
		$("#category_post_num").html(cat_post_show.length+" object(s)")
	});

	$(".cat_post_ref").dblclick(function(){
		$("#blog_frame").attr('src',$(this).attr("post_url"));
		$("#blog_window").click();
	});

	$(".cat_post_ref").click(function(){
		$(".cat_post_title").removeClass("selected");
		$(this).find(".cat_post_title").addClass("selected");
	});

})();
