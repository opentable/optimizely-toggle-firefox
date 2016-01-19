var data = require("sdk/self").data;
var tabs = require("sdk/tabs");

var text_entry = require("sdk/panel").Panel({
  contentURL: data.url("popup.html"),
  contentScriptFile: data.url("popup.js"),
  contentScriptOptions: {
    url: tabs.activeTab.url
  },
  onMessage: function(addonMessage) {
    tabs.activeTab.url = addonMessage.url;
  }
});

require("sdk/ui/button/action").ActionButton({
  id: "show-panel",
  label: "Show Panel",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  text_entry.resize(500, 250);
  text_entry.show();
  text_entry.postMessage({
    url: tabs.activeTab.url
  })
}

text_entry.on("show", function() {
  text_entry.port.emit("show");
});
