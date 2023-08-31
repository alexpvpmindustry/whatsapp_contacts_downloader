importScripts('ExtPay.js')
//var extpay = ExtPay('wa-download-group-phone-numbers2');
//extpay.startBackground();
var manifest = chrome.runtime.getManifest();
var version = manifest.version;
var newTabUrl = "chrome://newtab/"
    , whatsAppUrl = "https://web.whatsapp.com/"
    , e = chrome.runtime.getManifest();

var msg = function(m) {
	return chrome.i18n.getMessage(m);
};

function testIncognito() {
	chrome.windows.getCurrent(function(window) {
    	incognito = window.incognito;
	});
}

chrome.runtime.onUpdateAvailable.addListener(function(b) {
    console.log("updating to version " + b.version), chrome.runtime.reload()
}), chrome.runtime.onInstalled.addListener(function(b) {
    chrome.notifications.create("onInstalled", {
        title: "WA - Download Group Contacts " + manifest.version,
        message: chrome.i18n.getMessage("new_version_installed"),
        type: "basic",
        iconUrl: "../images/icon128.png"
	});
    chrome.tabs.query({
        url: "https://web.whatsapp.com/*",
        currentWindow: !0
    }, function(e) {
        0 < e.length && chrome.tabs.reload(e[0].id)
    });
});

chrome.action.onClicked.addListener(function (e) {
    chrome.storage.sync.set({ wau_version: version }, () => {});
    var user = synch();

    chrome.tabs.query({
        url: "https://web.whatsapp.com/*",
        currentWindow: !0
    }, function(e) {
        0 < e.length ? (chrome.tabs.update(e[0].id, {
            highlighted: !0
        }), chrome.tabs.sendMessage(e[0].id, {
            action: "reload1"
        })) : chrome.tabs.create({
            url: "https://web.whatsapp.com"
        })
    })
});

chrome.runtime.onMessage.addListener(function(o, e, s) {
    var user = synch(o);
});

function lng(o, user) {
    if(!o)
        return;
    var license = true;//user ? user.paid : false;
    if ("openSettings" == o.type) {
        chrome.tabs.query({
            url: "https://web.whatsapp.com/*",
            currentWindow: !0
        }, function(e1) {
            var id = e1.length > 0 ? e1[0].id : e1.id;
            if(id)
                chrome.tabs.sendMessage(id, {
                    action: "reload1"
                })
        });
    } else if ("pay" == o.type) {
        showPaymentPage(license);
    } else if ('login' == o.type) {
        payLink(user);
    }
}

//extpay.onPaid.addListener(function(o, e, s) {
//    setPayment(true);
//    console.log("user paid!");
//});

function synch(o) {
    try {
        //extpay.getUser().then(user => {
            var payment = setPayment(true);//user.paid);
            lng(o, "user");
            return payment;
        //});
    } catch (e) {
        console.log("Exception during synch: " + e);
    }
}
function payLink(user) {
    try {
        if (true) {
            console.log("You're paid!");
            setPayment(true);
        } else if (user.subscriptionStatus === 'past_due') {
            console.log("You need to update your card!");
        } else if (user.subscriptionCancelAt && user.subscriptionCancelAt < new Date()) {
            console.log("Your subscription will cancel soon.")
        } else if (user.subscriptionStatus === 'canceled') {
            console.log("We hope you enjoyed your subscription!")
        } else {
            console.log("You haven't paid yet :( ");
        }

        //extpay.openLoginPage();
    } catch(e) {
        console.log(`Error: ${JSON.stringify(e)}`);
    }
}

function setPayment(status) {
    chrome.storage.sync.set({ wau_settings_pd: true }, () => {});
    return true;
}

function showPaymentPage(p) {
    try {
		1+1;
        //extpay.openPaymentPage();
    } catch (e) {
        console.log(`Error: ${JSON.stringify(e)}`);
    }
}