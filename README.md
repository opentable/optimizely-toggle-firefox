#Optimizely Toggle Firefox

##What is it?

A Firefox add-on which can disable Optimizely for your current tab.

##How do I use it?

Once the [add-on](https://addons.mozilla.org/en-US/firefox/addon/optimizely-toggle/) is installed on your browser, you can toggle a simple switch to disable or enable Optimizely experiments on the current page (see screenshots).

![enabled](/screenshots/plugin-screenshot-enabled.png?raw=true)

Optimizely is enabled by default and can be disabled by clicking the switch. An example of this is shown in the screenshot below:

![disabled](/screenshots/plugin-screenshot-disabled.png?raw=true)

##How do I contribute to this project?

This is an Open Source project, and all feedback is welcome and pull requests encouraged.
Basic instructions to run a jpm project like this one [can be found here](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_Started_%28jpm%29).
To run Optimizely Toggle Firefox:

```
git clone https://github.com/opentable/optimizely-toggle-firefox.git
cd optimizely-toggle-firefox
npm install jpm -g
jpm run
```

Once installed locally, the plugin should be running in dev mode.
Please use the 'issues' section of this repository to submit bugs, requests for features, etc.

## Release History
- **v1.0.0** (2016-01-20)
    - initial release
- **v1.0.1** (2016-01-20)
    - basic UI changes
- **v1.0.2** (2016-01-28)
    - moved popup to top left
- **v1.0.3** (2016-02-11)
    - added visual hint that Optimizely is turned off on a given page (REJECTED)
- **v1.0.4** (2016-02-12)
    - fix for 1.0.3, not using insertAdjacentHTML but safer methods.