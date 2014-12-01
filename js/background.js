// background.js

var styles;
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message) {
      if (message.type === "showPageAction") {
        var tab = sender.tab;
        chrome.pageAction.show(tab.id);

        styles = message.styles;
      } else if (message.type === "getStylesheets") {

        sendResponse({styles: styles});
      }
    }
});


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // chrome.pageAction.hide(tabId);
});

