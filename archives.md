---
layout: file-explorer
title: "归档"
---

<li>
	<a href="#"><img src="images/icons/my-computer-16x16.png"> My computer</a>
	<ul>
		{% for post in site.posts limit:100 %}
			<li><a href="{{ post.url }}" title="{{ post.title }}"><img src="images/icons/notepad-file-16x16.png"> {{ post.date | date_to_string }} {{ post.title }}</a></li>
		{% endfor %}
	</ul>    
</li>
