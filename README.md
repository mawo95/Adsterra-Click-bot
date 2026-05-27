# Adsterra-Click-bot

# This is a proof of concept. I am not responsible for any kind of damge or usage.

This script works as simple, as pasting the content of script.js into your websites html file.

# How does the code work?

Firstly it intercepts every network request and waits for the ad loading one with a status code of 200.
You might need to improve the .includes("/watch"), if you are using youtube embeds or any other url which contains /watch.

The following code opens the second url as image. This is the part where it automaticlly presses the ad for you. It does not show or open the tab anywhere.
```js
if (this.status == 200 && url.includes('/watch')) {
    const url2 = extractUrl(this.responseText)[1]
    new Image().src = "https://" + url2
}
```
                      
# Further

Additionally you can add a code like this, to automaticcly refresh the site which shows ads to get impressions and clicks in selenium easily or via normal browser
```js
setTimeout(function() {
    window.location.href = "url"
}, 1000 * 15)
```

# Other
You can also add this code to your normal websites without simulating the website opens.
When ever a user then visit the site, its a normal impression, but additionally, the user clicks the ad (even though he isn't).
Users won't even notice that btw.

# Disclaimer
This is a proof of concept showing how to hook network requests in javascript!
This repo does not promote or encourage anyone to use/try this program!
Adsterra can and will ban your account if you use this script!
I am not responsible for any damage/bans!
