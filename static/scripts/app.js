//do stuff with the script
var script = document.createElement('script');
script.onload =function(){
    var script1=document.createElement('script');;
    script1.src = "https://cdn.jsdelivr.net/qtip2/3.0.3/basic/jquery.qtip.js";
    document.head.appendChild(script1);
};
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js";
document.head.appendChild(script);

var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/qtip2/3.0.3/basic/jquery.qtip.css';
    link.media = 'all';
    head.appendChild(link);
}

var globalTargetId = 0;
var globalTachyonId = 0;
function createPannel(){
    if($('#convertTachyonBox').length){
        $('#convertTachyonBox').show();
        return;
    }
    $('body').append(
        '<div id="convertTachyonBox" style="z-index:1000000;position: fixed; width: 80%; margin-left: 10%; top: 10%">' +
            '<textarea id="target" style="width: 49%; height: 500px; display: inline-block;" placeholder="Put your css here! Note please remove normalize section"></textarea>' +
            '<textarea id="tachyons" style="width: 49%; height: 500px; display: inline-block;" placeholder="Put Tachyon css here! Note please remove normalize section"></textarea>' +
        '<div><button onclick="process()">Process</button></div>'+
        '</div>'
        );
}
function process(){
    var targets = processTargetArrayData($('#target').val());
    var tachyons = processTachyonsData($('#tachyons').val())
    compareArray(targets, tachyons);
    highlightElementUsingTachyon(targets);
    showTotalTachyonCssIsUsed(tachyons);
    $('#convertTachyonBox').hide();
}
function highlightElementUsingTachyon(targets){
    for(var i=0;i<targets.length;i++){
        var target = targets[i];
        if(target.isUseTachyon){
            var targetElement = $(target.query);
            targetElement.css('border','1px solid red');
            targetElement.attr('use-taychon-classes', target.tachyons.join(' '));
            targetElement.attr('remove-style', target.stylesRemove.join(';'));
            targetElement.qtip({
                content: {
                    text: '<strong>Taychon Classes:</strong>' + target.tachyons.join(' ') +
                    '<br><br><strong>Remove Style: </strong>' + target.stylesRemove.join(';'),
                    title: target.query,
                    button: 'Close'
                },
                hide: {
                    event: false
                },
                position: {
                    my: 'top left',  // Position my top left...
                    at: 'center center', // at the bottom right of...
                }
            });
        }
    }
}
function showTotalTachyonCssIsUsed(tachyons){
    var temp="";
    for(var i=0;i<tachyons.length;i++) {
        var tachyon = tachyons[i];
        if(tachyon.isUse){
            temp += tachyon.query;
        }
    }
    console.log(temp);
}
function TargetNode(query, mediaQuery){
    this.id = globalTargetId++;
    this.query = query.trim().replace('{','');
    this.mediaQuery = mediaQuery;
    this.styles = [];
    this.tachyons = [];
    this.stylesRemove = [];
    this.isUseTachyon = false;
    this.newStyle=function(str){
        this.styles.push(str.replace('}','').replace('}','').replace(';','').trim());
    };
    this.useTachyon=function(str){
        this.tachyons.push(str);
    }
    this.removeAttr=function(str){
        this.stylesRemove.push(str);
    }
    this.isUse = function(tachyon)
    {
        var sameAmount = 0;
        if(this.query === tachyon.query){
            return false;
        }
        for (var i = 0; i < this.styles.length; i++) {
            for (var j = 0; j < tachyon.styles.length; j++) {
                if(tachyon.mediaQuery){
                    continue;
                }
                if(this.styles[i] === tachyon.styles[j]){
                    sameAmount++;
                }
                if(sameAmount>=tachyon.styles.length){
                    this.useTachyon(tachyon.query);
                    this.removeAttr(tachyon.styles.join());
                    tachyon.use();
                    this.isUseTachyon = true;
                    return true
                }
            }
        }
        return false;
    }
}
function TachyonNode(query,mediaQuery){
    this.id = globalTachyonId++;
    this.query = query.trim().replace('{','');
    this.styles = [];
    this.mediaQuery = mediaQuery;
    this.isUse = false;
    this.use=function () {
        this.isUse = true;
    }
    this.newStyle=function(str){
        var arrAttrs= str.split(';');
        if(arrAttrs.length>2){
            for(var i=0;i<arrAttrs.length;i++){
                arrAttrs[i] =arrAttrs[i].replace('}','').replace('}','');
                if(arrAttrs[i]){
                    this.styles.push(arrAttrs[i].replace('}','').replace('}','').replace(';','').trim());
                }
            }
        }else {
            this.styles.push(str.replace('}','').replace('}','').replace(';','').trim());
        }
    };
}
// .related-stores p {
//     padding-bottom: 20px;
//     padding-top: 40px;
//     font-size: 18px;
//     line-height: 24px;
//     color: #086a87; }
//Target return data [ {id: 1,query: '.related-stores', styles:['font-size: 3rem;']}]
function processTargetArrayData(str){
    var result= [];
    var listTarget = str.split('\n');
    var currentNode;
    var currentNodes = [];
    var currentMedia;
    var currentQueryList= "";
    var isCommenting = false;
    for(var i = 0; i< listTarget.length; i++) {
        var item = listTarget[i];
        if(!item.trim()){
            continue;
        }
        if(item.indexOf('/*') > -1){
            //ignore comment
            isCommenting = true;
        }
        if(item.indexOf('*/') > -1){
            //ignore comment
            isCommenting = false;
            continue;
        }
        if(isCommenting){
            continue;
        }

        if (item.indexOf('@media ') > -1) {
            //mediaQuery;
            currentMedia = item.replace('{','').trim();
            continue;
        }
        if(item.indexOf(',')>-1 && item.indexOf(':') === -1){
            currentQueryList +=item.replace('\n','').trim();
            if(item.indexOf(' {') === -1){
                continue;
            }
        }
        if (item.indexOf(' {') > -1) {
            //new node
            var query = item.split(' {')[0];
            if(currentQueryList) {
                if(currentQueryList.indexOf(query.trim()) === -1){
                    currentQueryList += item;
                }
                currentQueryList = currentQueryList.split(',');
                for (var j = 0; j < currentQueryList.length; j++) {
                    var node = new TargetNode(currentQueryList[j],currentMedia);
                    result.push(node);
                    currentNodes.push(node);
                }
                currentQueryList = "";
                continue;
            }

            var node = new TargetNode(query,currentMedia);
            result.push(node);
            currentNode = node;
            continue;
        }
        if(currentNodes.length){
            for (var j = 0; j < currentNodes.length; j++) {
                currentNodes[j].newStyle(item);
            }
        }else{
            if(!currentNode){
                debugger;
            }
            currentNode.newStyle(item);
        }
        if(item.indexOf(' }') > -1){
            //end node
            currentNode = undefined;
            currentNodes = [];
        }
        if(item.indexOf(' } }') > -1){
            //end mediaQuery
            currentMedia = undefined;
        }
    }
    return result;
}
//Target return data [ {id: 1,query: '.f1', styles:['font-size: 3rem;']}]
function processTachyonsData(str){
    var result= [];
    var listTarget = str.split('\n');
    var currentMedia;
    var isCommenting = false;
    var nodes = [];
    var currentQueryList= "";
    for(var i = 0; i< listTarget.length; i++) {
        var item = listTarget[i];
        if (!item.trim()) {
            continue;
        }
        if (item.indexOf('/*') > -1) {
            //ignore comment
            isCommenting = true;
        }
        if (item.indexOf('*/') > -1) {
            //ignore comment
            isCommenting = false;
            continue;
        }
        if (isCommenting) {
            continue;
        }
        if (item.trim() === '}') {
            //end mediaQuery
            currentMedia = undefined;
            continue;
        }
        if (item.indexOf('@media ') > -1) {
            //mediaQuery;
            currentMedia = item.replace('{', '').trim();
            continue;
        }
        if (item.indexOf(',') > -1 && item.indexOf('}') === -1) {
            currentQueryList += item.replace('\n', '').trim();
            if (item.indexOf(' {') === -1) {
                continue;
            }
        }
        if (currentQueryList) {
            if (currentQueryList) {
                var query = item.split(' { ')[0]
                if(currentQueryList.indexOf(query.trim()) === -1){
                    currentQueryList += query;
                }
                currentQueryList = currentQueryList.split(',');
                for (var j = 0; j < currentQueryList.length; j++) {
                    var node = new TachyonNode(currentQueryList[j], currentMedia);
                    result.push(node);
                    nodes.push(node);
                }
                currentQueryList = "";
            }
        }
        var attr = item.split(' { ')[1];
        if (nodes.length) {
            for (var j = 0; j < nodes.length; j++) {
                nodes[j].newStyle(attr);
            }
            nodes = [];
        } else {
            var query = item.split(' { ')[0];
            var node = new TachyonNode(query, currentMedia);
            result.push(node);
            if (!node) {
                debugger;
            }
            node.newStyle(attr);
        }


    }
    return result;
}

function compareArray(targets,tachyons){
    var result = [];
    for(var i=0;i<targets.length;i++){
        for(var j=0;j<tachyons.length;j++){
            if(targets[i].isUse(tachyons[j])){
                // console.log(targets[i].query + ': ' +tachyons[j].query)
            }
        }
    }
    return result;
}
