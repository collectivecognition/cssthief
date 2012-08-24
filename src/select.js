var cssthief = { // Namespace
	el: null,
	style: {
		outline: null,
		"-webkit-box-shadow": null,
		zIndex: null
	},
	click: function(e){
		var el = e.target;
		// TODO: Fetch HTML and CSS
		// TODO: Strip comments and other useless tags
		// TODO: Strip attributes, such as classnames, ids, etc..
		// TODO: Generate proper selectors for CSS?
		// TODO: Grab files / images referenced in CSS as well and alter paths?
		// TODO: Optionally, tidy it all up
		// TODO: Save to the clipboard
		// TODO: Publish to jsfiddle or something similar?
		cssthief.disable();
		// Copy HTML to clipboard
		// FIXME: This isn't working, despite permissions
		var html = document.createElement("textarea");
		html.style.visibility = "hidden";
		document.body.appendChild(html);
		html.value = el.outerHTML;
		html.focus();
		document.execCommand("SelectAll");
		document.execCommand("Copy", false, null);
		document.body.removeChild(html);
		
		e.preventDefault();
	},
	enabled: false,
	enable: function(){
		cssthief.enabled = true;
		window.addEventListener("click", cssthief.click);
	},
	disable: function(){
		cssthief.enabled = false;
		cssthief.restoreStyles();
		window.removeEventListener("click", cssthief.click);
		
	},
	restoreStyles: function(){
		if(cssthief.el){
			for(prop in cssthief.style)
				cssthief.el.style[prop] = cssthief.style[prop];
		}
	}
};

window.addEventListener("mousemove", function(e){
	var el = document.elementFromPoint(e.clientX, e.clientY);
	if(cssthief.el != el && cssthief.enabled){
		// Restore old styles
		cssthief.restoreStyles();
		// Save styles from new element
		for(prop in cssthief.style)
			cssthief.style[prop] = el.style[prop];
		// Apply styles to new element
		el.style.outline = "5px solid rgba(255, 0, 0, 0.5)";
		el.style["webkit-box-shadow"] = "0px 0px 5px rgba(255, 0, 0, 0.5)";
		el.style.zIndex = 9999;
		// Save reference to new element
		cssthief.el = el;
	}
}, true);