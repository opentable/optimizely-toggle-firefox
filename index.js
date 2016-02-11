var data = require("sdk/self").data;
var tabs = require("sdk/tabs");
var { ToggleButton } = require('sdk/ui/button/toggle');
var OPTIMIZELY_QUERY = 'optimizely_disable=true';
var workers = [];

var text_entry = require("sdk/panel").Panel({
    contentURL: data.url("popup/popup.html"),
    contentScriptFile: data.url("popup/popup.js"),
    contentScriptOptions: {
        url: tabs.activeTab.url
    },
    onMessage: function (addonMessage) {
        tabs.activeTab.url = addonMessage.url;
        showAlert(tabs.activeTab);
    },
    onHide: handleHide
});

var button = ToggleButton({
    id: "show-panel",
    label: "Optimizely Toggle",
    icon: {
        "16": "./icons/icon-16.png",
        "32": "./icons/icon-32.png",
        "64": "./icons/icon-64.png"
    },
    onChange: handleChange
});

function handleChange(state) {
    if (state.checked) {
        text_entry.resize(500, 250);
        text_entry.show({
            position: button
        });
        text_entry.postMessage({
            url: tabs.activeTab.url
        })
    }
}

function handleHide() {
    button.state('window', {checked: false});
}

text_entry.on("show", function () {
    text_entry.port.emit("show");
});

function showAlert(tab) {
    tab.on('ready', function() {
        if(tab.url.indexOf(OPTIMIZELY_QUERY) > -1) {
            var worker = tab.attach({
                contentScriptFile: data.url("alert/activeAlert.js")
            });
            workers.push(worker);
        } else {
            workers.forEach(function(worker) {
                worker.destroy();

            });
        }
    });
}