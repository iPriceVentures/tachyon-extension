$(document).ready(function(){
    chrome.tabs.query({active: true, currentWindow: true},
        function(tabs) { processTab(tabs); });
})

function processTab(tabs) {
    var url = tabs[0].url;
    var validationResult;
    chrome.runtime.getBackgroundPage(function(backgroundPage) {
        validationResult =
            JSON.parse(backgroundPage.sessionStorage.getItem(url));
        if (validationResult) {
            processResult(validationResult);
        }
    });
}
function hightFirstElement(query){
    chrome.tabs.executeScript(null, {
        code: "$('"+query+"').focus().css(\"border\", \"1px solid red\");"
    });
}
function processResult(validationResult) {
    $('#btn-show').click(function(){
        chrome.tabs.getSelected(function(tab){
                chrome.tabs.sendMessage(
                    tab.id, {'validationResult': validationResult}, function (response) {}
                );
            }
        );
    });

    for(var i = 0;i< validationResult.length;i++){
        var item =validationResult[i];
        console.log(item);

            $('#table').append(`<tr>
<td class="query-click click">${item.query}</td>
<td class="file-click click">${item.file}</td>
<td>${item.line}</td>
<td>${item.tachyons.join('<br/>')}</td>
<td>${item.stylesRemove.join('<br/>')}</td>
</tr>`);
    }
    $('.query-click').click(function () {
        chrome.tabs.executeScript(null, {
            code: "execCopy('"+$(this).text()+"');"
        });
    });
    $('.file-click').click(function () {
        chrome.tabs.executeScript(null, {
            code: "execCopy('"+$(this).text()+"');"
        });

    });
}
