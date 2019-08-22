document.addEventListener('DOMContentLoaded', function () {
    const bgScript = chrome.extension.getBackgroundPage();
    Object.keys(bgScript.wordCount).forEach((url) => {
            const div = document.createElement('div');
            div.textContent = `${url}: ${bgScript.wordCount[url]}`;
            document.body.appendChild(div);
        }
    )
});
