window.wordCount = {};
window.word = "";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.openResult) {
        chrome.tabs.create({url: "main.html"});
    } else if(request.sendWord) {
        sendResponse({word});
    }
    else {
        window.wordCount[request.url] = request.count;
    }
});
