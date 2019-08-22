document.addEventListener('DOMContentLoaded', function () {
    const bgScript = chrome.extension.getBackgroundPage();
    document.querySelector(".word").value = bgScript.word;

    document.querySelector(".search").addEventListener("click", () => {
        bgScript.word = document.querySelector(".word").value;
    });
    document.querySelector(".result").addEventListener("click", () => {
        chrome.runtime.sendMessage({
            openResult: true
        })
    })
});
