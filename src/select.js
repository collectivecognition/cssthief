var cssthief = { // Namespace
	el: null,
	style: {
		outline: null,
		"-webkit-box-shadow": null,
		zIndex: null
	},
	onclick: null,
	enabled: false;
	enable: function(){
		enabled = true;
	},
	disable: function(){
		enabled = false;
		cssthief.restoreStyles();
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
	if(cssthief.el != el && enabled){
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