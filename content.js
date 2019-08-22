let word = "";

chrome.runtime.sendMessage({sendWord: true}, (response) => {
    word = response.word;
});
const re = new RegExp(`"${word}"`, "g");
const count = document.documentElement.innerHTML.match(re) || [];
chrome.runtime.sendMessage({
    url: window.location.href,
    count: count.length
});
