(function() {
       function extractUrl(text) {
           const urlPattern = /https?:\/\/[^\s"']+/g;
           const urls = text.match(urlPattern) || [];
           for (var url of urls) {
               if (url.startsWith("https://cdn")) {
                   urls.splice(urls.indexOf(url), 1)
               }
           }
           const urllol = text.split("'//")[1].split("';")[0]
           urls.push(urllol)
           return urls
       }

       const originalXHR = window.XMLHttpRequest.prototype.open;
       window.XMLHttpRequest.prototype.open = function(method, url, ...rest) {
           this.addEventListener('load', function() {
               if (this.status == 200 && url.includes('/watch')) {
                   const url2 = extractUrl(this.responseText)[1]
                   if (url.includes("cdn")) {} else {
                       setTimeout(function() {
                           new Image().src = "https://" + url2
                       }, Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000)


                   }
               }
           });

           return originalXHR.apply(this, [method, url, ...rest]);
       };
})();
