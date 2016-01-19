function updatePopupUrl(url) {
    document.getElementById('currentUrl').textContent = url;
}

self.on("message", function(addonMessage) {
    updatePopupUrl(addonMessage.url);
});