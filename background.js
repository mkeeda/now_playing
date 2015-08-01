//Called when the URL of a tab changes.
chrome.tabs.onUpdated.addListener( function( tabId, changeInfo, tab ) {
  if( tab.url.indexOf("https://play.google.com/music") != -1 ){
    chrome.pageAction.show( tabId );
  }
});

//Called when the icon is clicked.
chrome.pageAction.onClicked.addListener(function() {
  chrome.tabs.executeScript(null, {
    "file" : "content_script.js"});  
});
