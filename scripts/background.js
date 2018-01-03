var globals = {};
globals.tabToUrl = {};
globals.envTab = {};
globals.tachyon_popup = "tachyon-validator.html";
globals.tachyon_popup_dev = "tachyon-validator-dev.html";

function hex2rgba(hex) {
    // Remove the '#' char if necessary.
    if (hex.charAt(0) === "#") { hex = hex.slice(1); }
    hex = hex.toUpperCase();
    var hexAlpha = "0123456789ABCDEF", value = new Array(4), k = 0, int1, int2, i;
    for (i = 0; i < 6; i += 2) {
        int1 = hexAlpha.indexOf(hex.charAt(i));
        int2 = hexAlpha.indexOf(hex.charAt(i + 1));
        value[k] = (int1 * 16) + int2;
        k += 1;
    }
    value[3] = 255;
    return value;
}
chrome.tabs.onCreated.addListener(function(tab) {
    updateTab(tab);
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    globals.tabToUrl[tabId] = tab.url;
    globals.envTab[tabId] = {env:"dev"};
    updateTab(tab);
});
function updateTab(tab) {
    chrome.storage.sync.get(['tachyonOptions'], function (items) {
        var options = items.tachyonOptions;
        validator.setOptions(options);
        if (tab.url && !isForbiddenUrl(tab.url)) {
            chrome.tabs.sendMessage(
                tab.id, {'getAmpDetails': true}, function (response) {
                    if (!response || !response.contentCSS) {
                        return;
                    }
                    //Todo need load from options
                    var tachyons = $('#tachyons-default').val();
                    //var baseRem = $('#base-rem-default').val();
                    var contentCSS = response.contentCSS;
                    //Todo
                    if (contentCSS.split('\n').length < 10) {
                        globals.envTab[tab.id] = {env: "prod"};
                        validator.setEnv(tab.id, "prod");
                        contentCSS = contentCSS.replace(/}/g, '}\n').replace(/}\n}/g, '}}\n');
                    }
                    var errors = validator.checkValid(contentCSS, tachyons, tab.id);
                    if (errors.length > 0) {
                        window.sessionStorage.setItem(tab.url, JSON.stringify(errors));
                        updateTabStatus(tab.id, "Invalid", errors.length.toString(), '#222');
                        updateTabPopup(tab.id);
                    }
                }
            );
        }
    });
}
function updateTabPopup(tabId) {
    // Verify tab still exists
    chrome.tabs.get(tabId, function(tab) {
        if (!chrome.runtime.lastError) {
            var popup =globals.envTab[tab.id] && globals.envTab[tab.id].env ==="prod"?globals.tachyon_popup :globals.tachyon_popup_dev;
            chrome.browserAction.setPopup({tabId: tabId, popup: popup});
        }
    });
}
function updateTabStatus(tabId, title, text, color) {
    // Verify tab still exists
    chrome.tabs.get(tabId, function(tab) {
        if (!chrome.runtime.lastError) {
            if (title !== undefined)
                chrome.browserAction.setTitle({title: title, tabId: tabId});
            if (text !== undefined)
                chrome.browserAction.setBadgeText({text: text, tabId: tabId});
            if (color !== undefined)
                chrome.browserAction.setBadgeBackgroundColor(
                    {color: hex2rgba(color), tabId: tabId});
        }
    });
}

function isForbiddenUrl(url) {
    return (url.startsWith('chrome://') || url.startsWith('view-source'));
}