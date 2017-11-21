(function(){
	if($("#blog_window",window.parent.document).length==0){
		var index_url = 'http://'+window.location.host+"/index.html";
		window.location.href=index_url;
	}

})();