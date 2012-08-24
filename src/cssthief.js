chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.executeScript(tab.id, {code: "cssthief.enable();"});
});

chrome.tabs.executeScript(tab.id, {file:"select.js"});