# Adsterra-Click-bot

# This is a proof of concept. I am not responsible for any kind of damge or locked accounts.

This script works as simple, as pasting the content of script.js into your websites html file. Add it above any other script tag for the perfect experience.

# How does the code work?

Firstly it intercepts every network request and waits for the ad loading one with a status code of 200.
You might need to improve the .includes("/watch"), if you are using youtube embeds or any other url which contains /watch.

The following code opens the second url as image. This is the part where it automaticlly preses the ad for you. It does'nt show or open the tab anywhere.
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
Dont use it. It's for educational purpose.
Adsterra can and will ban your account if you use this script (at least if you **abuse**) it.
I am not responsible for any damage/bans.
In case you use it, you should know it's click fraud.
