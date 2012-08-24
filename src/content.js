chrome.extension.onMessage.addListener(function(details){
    console.log(details);
});

var el;

document.body.addEventListener("contextmenu", function(event){
	el = event.target;
}, true);