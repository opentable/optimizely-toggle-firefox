#Optimizely Toggle Firefox

##What is it?

A Firefox add-on which can disable Optimizely for your current tab.

##How do I use it?

Once the [add-on](https://addons.mozilla.org/en-US/firefox/addon/optimizely-toggle/) is installed on your browser, you can toggle a simple switch to disable (OFF) or enable (ON) Optimizely experiments on the current page (see screenshots).

![enabled](http://i.imgur.com/jX1RNjhl.png)

Optimizely is enabled by default and can be disabled by clicking the switch. An example of this is shown in the screenshot below:

![disabled](http://i.imgur.com/Q2IhDbyl.png)

##How do I contribute to this project?

This is an Open Source project, and all feedback is welcome and pull requests encouraged.
Basic instructions to run a jpm project like this one [can be found here](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_Started_%28jpm%29).
To run Optimizely Toggle Firefox:

```
git clone https://github.com/federicomaffei/optimizely-toggle-firefox.git
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
- **v1.0.3** (2016-01-29)
    - moved popup to top left    