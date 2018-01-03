var globals = {};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.getAmpDetails){
        repsponse(sendResponse);
        return;
    }
    if(request.validationResult){
        buildPopup(request.validationResult)
    }


});
function buildPopup(validationResult) {
    var validatePanel = $('#validate-result');
    if (validatePanel.length === 0) {
        $("body").append(`<div id="validate-result" style="z-index:99999;background-color:#dddddd;position: fixed;top:0; left: 0;">
<div><button id="btn-close">Close</button></div>
<table style="width:100%" id="table" >
    <tr>
        <th>Query</th>
        <th>File</th>
        <th>Line</th>
        <th>Tachyon class</th>
        <th>Remove style</th>
    </tr>
</table>
</div>`);
        if (validationResult.length > 0) {
            for (var i = 0; i < validationResult.length; i++) {
                var item = validationResult[i];
                $('#table').append(`<tr>
<td class="query-click click">${item.query}</td>
<td class="file-click click">${item.file}</td>
<td>${item.line}</td>
<td class="tachyons-click click">${item.tachyons.join('<br/>')}</td>
<td>${item.stylesRemove.join('<br/>')}</td>
</tr>`);
            }
            $('.query-click').click(function () {
                execCopy($(this).text());
            });
            $('.file-click').click(function () {
                execCopy($(this).text());
            });
            $('#btn-close').click(function () {
                $('#validate-result').hide();
            });
        }
    } else {
        validatePanel.show();
    }
}
function repsponse(sendResponse){
    var linkCSS = getCSSLink();
    var contentCSS = getContentAmpCustom();
    sendResponse({
        'linkCSS': linkCSS, 'contentCSS': contentCSS
    });
}
function getContentAmpCustom() {
    //Todo should support non-amp page also
    return document.querySelector("[amp-custom]").innerText;
}
function getCSSLink() {
    var cssLink = '';
    var headLinks = document.head.getElementsByTagName('link');
    if (headLinks.length > 0) {
        for (var index in headLinks) {
            var link = headLinks[index];
            if (link instanceof HTMLLinkElement &&
                link.hasAttribute('rel') &&
                link.hasAttribute('href')) {
                cssLink = link.getAttribute('href');
                break;
            }
        }
    }
    return cssLink;
}
function execCopy(text){
    var textCopy = $('#text-copy');
    if(textCopy.length === 0){
        $("body").append(`<textarea id="text-copy" style="position: fixed;top:-100rem"></textarea>`);
        textCopy = $('#text-copy');
    }
    $('#text-copy').val(text);
    var copyTextarea = document.querySelector('#text-copy');
    copyTextarea.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
}