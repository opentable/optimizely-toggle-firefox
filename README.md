#Optimizely Toggle Firefox

##What is it?

This is a Firefox add-on that disables Optimizely for the tab you are browsing, via a switch.

##How do I use it?

Once the [add-on](https://addons.mozilla.org/en-US/firefox/addon/optimizely-toggle/) is installed on your browser, you can toggle a simple switch to disable (OFF) or enable (ON) Optimizely experiments on the current page (see screenshots).

![enabled](http://i.imgur.com/jX1RNjh.png)

Optimizely is enabled by default, can be disabled clicking on the switch and getting as a result the screenshot below:

![disabled](http://i.imgur.com/Q2IhDby.png)

##How do I contribute to this project?

This is an Open Source project, so anyone is encouraged to clone this repo and start sending PRs!
Basic instructions to run a jpm project like this one [can be found here](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_Started_%28jpm%29).
Basically you can:

```
git clone https://github.com/federicomaffei/optimizely-toggle-firefox.git
cd optimizely-toggle-firefox
npm install jpm -g
jpm run
```

And the plugin should be running in dev mode.
Please use the 'issues' section of this repository to submit bug, requests for features, etc.

## Release History
- **v1.0.0** (2016-01-20)
    - initial release
- **v1.0.1** (2016-01-20)
    - basic UI changes
- **v1.0.2** (2016-01-28)
    - moved popup to top left
- **v1.0.3** (2016-01-29)
    - moved popup to top left    