function injectJs(link) {
        var scr = document.createElement("script");
        scr.type="text/javascript";
        scr.src=link;
        (document.head || document.body || document.documentElement).appendChild(scr);
}

function injectCS(link) {
        var o = document.createElement("link");
        o.rel = "stylesheet";
        o.type = "text/css";
        o.id = "tabs";
        o.href = link;
        (document.head || document.body || document.documentElement).appendChild(o);
}

injectJs(chrome.runtime.getURL("3rdparty/jquery.min.js"));
injectJs(chrome.runtime.getURL("3rdparty/xlsx.core.min.js"));
injectJs(chrome.runtime.getURL("3rdparty/FileSaver.js"));
injectJs(chrome.runtime.getURL("3rdparty/Blob.js"));
injectJs(chrome.runtime.getURL("3rdparty/sweetalert2.all.min.js"));
injectCS(chrome.runtime.getURL('js/moduleraid.js'));
injectCS(chrome.runtime.getURL("style/loadwa.css"));
injectCS(chrome.runtime.getURL("3rdparty/sweetalert2.min.css"));
injectCS(chrome.runtime.getURL("3rdparty/bootstrap.min.css"));
injectCS(chrome.runtime.getURL("style/whatschrome.png"));
injectJs(chrome.runtime.getURL("js/fill.js"));

document.addEventListener("wdpay", function(a) {
        chrome.runtime.sendMessage({
                type: a.detail,
        }, function(response) {
                // console.log(response);
        });
});

chrome.runtime.onMessage.addListener(function(a) {
        if(a.action == "reload1") {
                window.dispatchEvent(new CustomEvent("reload1", {
                        detail: {}
                }));
                synch();
        }
});
        
document.addEventListener("synch", function(a) {
        chrome.runtime.sendMessage({
                type: "synch",
        }, function(response) {
                // console.log(response);
                synch();
        });
});

synch();
function synch() {
        chrome.storage.sync.get(["wau_settings_pd"], (obj) => {
                // console.log(`synch from server: ${JSON.stringify(obj)}`);
                if(obj)
                        localStorage['wdpayChatFolders'] = obj.wau_settings_pd;
        });
        chrome.storage.sync.get(["wau_version"], (obj) => {
                if(obj)
                        localStorage['wau_version'] = obj.wau_version;
        });
}