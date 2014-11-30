chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
});

// background.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message && message.type === 'showPageAction') {
      var tab = sender.tab;
      chrome.pageAction.show(tab.id);
    }
});


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
});

