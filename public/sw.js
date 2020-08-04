let cacheUserData = "quiz_data";

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheUserData).then((data)=>{
            data.addAll([
              "/static/js/bundle.js",
              "/static/js/main.chunk.js",
              "/static/js/1.chunk.js",
              "https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@700&family=Righteous&display=swap",
              "https://fonts.gstatic.com/s/cormorantupright/v6/VuJudM3I2Y35poFONtLdafkUCHw1y1NpoSDkWdTKRA.woff2",
              "https://fonts.gstatic.com/s/cormorantupright/v6/VuJudM3I2Y35poFONtLdafkUCHw1y1NpoSDrWdQ.woff2",
              "https://fonts.gstatic.com/s/righteous/v8/1cXxaUPXBpj2rGoU7C9WhnGFucE.woff2",
              "https://fonts.gstatic.com/s/righteous/v8/1cXxaUPXBpj2rGoU7C9WiHGF.woff2",
               "/main.a00f8902ee0de5d5b9c0.hot-update.js",
               "/static/media/bg.6c9c10e0.jpg",
                "/sw.ts",
               "/sockjs-node",
               "/manifest.json",
               "/favicon.ico",
               "/logo192.png",
               "/static/js/0.chunk.js",
               "/"
            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((resp)=>{
                if(resp){
                    return resp; 
                }
                let requestUrl=event.request.clone();
                fetch(requestUrl)
            })
        )
    }
})