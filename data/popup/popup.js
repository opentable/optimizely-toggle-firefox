var OPTIMIZELY_QUERY = '?optimizely_disable=true';
var OPTIMIZELY_PARAM = '&optimizely_disable=true';
var url;

function updatePopupUrl(url) {
    document.getElementById('currentUrl').textContent = url;
}

function updateTabUrl(url) {
    self.postMessage({
        url: url
    });
}

function editUrl() {
    var value = document.getElementById("myonoffswitch").checked;
    if (value) {
        if(url.indexOf('?') > -1) {
            url = url + OPTIMIZELY_PARAM;
        }
        else {
            url = url + OPTIMIZELY_QUERY;
        }
    }
    else {
        if(url.indexOf('&') > -1) {
            url = url.split(OPTIMIZELY_PARAM)[0];
        }
        else {
            url = url.split(OPTIMIZELY_QUERY)[0];
        }

    }
    updateTabUrl(url);
    updatePopupUrl(url);
}

function setSwitchValue(url, callback) {
    document.getElementById("myonoffswitch").checked = url.indexOf(OPTIMIZELY_QUERY) > -1 || url.indexOf(OPTIMIZELY_PARAM) > -1;
    callback();
}

function removeAlert() {

}

document.getElementById("myonoffswitch").addEventListener("click", editUrl);

self.on("message", function(addonMessage) {
    url = addonMessage.url;
    setSwitchValue(url, function() {
        updatePopupUrl(url);
    });
});