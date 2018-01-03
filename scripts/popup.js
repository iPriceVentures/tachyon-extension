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
function processResult(validationResult) {


    for(var i = 0;i< validationResult.length;i++){
        var item =validationResult[i];
        console.log(item);

        $('#table').append(`<tr>
<td>${item.query}</td>
<td>${item.tachyons.join('<br/>')}</td>
<td>${item.stylesRemove.join('<br/>')}</td>
</tr>`);
    }
}
