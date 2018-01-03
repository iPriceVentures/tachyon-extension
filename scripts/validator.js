var validator =(function(){
    var validator = {
        checkValid: checkValid,
        setEnv: setEnv,
        setOptions: setOptions
    };
    var globalTargetId = 0;
    var globalTachyonId = 0;
    var tab = {
    };
    var options;
    function setOptions(opts){
        options = opts;
    }
    function setEnv(tabID,mode) {
        tab[tabID] = {env: mode};
    }
    function checkValid(target, tachyon,tapId){
        var targets = processTargetArrayData(target,tapId);
        var tachyons = processTachyonsData(tachyon);
        compareArray(targets, tachyons);
        showTotalTachyonCssIsUsed(tachyons);
        return getListEnableUseTachyon(targets);
    }
    function getListEnableUseTachyon(targets){
        var result = [];
        for(var i=0;i<targets.length;i++) {
            var target = targets[i];
            if (target.isUseTachyon) {
                result.push(target);
            }
        }
        return result;
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
    function TargetNode(query, mediaQuery,commentTemp){
        this.id = globalTargetId++;
        this.query = query.trim().replace('{','');
        this.mediaQuery = mediaQuery;
        this.styles = [];
        this.tachyons = [];
        this.stylesRemove = [];
        this.isUseTachyon = false;
        this.isClass= query.indexOf('.')>-1? true:false;
        if(commentTemp){
            commentTemp = commentTemp.trim().split(' ');
            this.file = commentTemp[3]
            this.line = commentTemp[2].replace(',','');
        }
        this.newStyle=function(str){
            str = str.replace(/ /g,'');
            str = str.replace('}','').replace('}','').trim();
            var arr = str.split(';');
            for(var i = 0;i<arr.length;i++){
                var item = arr[i];
                if(item){
                    this.styles.push(item.trim());
                }
            }
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
            if(!this.isClass){
                return false;
            }
            if(options.ignoreClasses.indexOf(this.query+"\n")>-1){
                //In ignore list
                return false;
            }
            //Todo refactor to function ignore list
            if(this.query === tachyon.query || this.query.indexOf(tachyon.query)>-1 || this.query.indexOf(":")>-1
                || tachyon.query.indexOf(' ')>-1 || tachyon.query.indexOf(':')>-1) {

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
    TargetNode.parse=function(str){

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
            str = str.replace(/ /g,'');
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
    TachyonNode.parse=function(str){

    }
// .related-stores p {
//     padding-bottom: 20px;
//     padding-top: 40px;
//     font-size: 18px;
//     line-height: 24px;
//     color: #086a87; }
//Target return data [ {id: 1,query: '.related-stores', styles:['font-size: 3rem;']}]
    function processTargetArrayData(str,tapId){
        var result= [];
        var listTarget = str.split('\n');
        var currentNode;
        var currentNodes = [];
        var currentMedia;
        var currentQueryList= "";
        var commentTemp= "";
        var isCommenting = false;
        for(var i = 0; i< listTarget.length; i++) {
            var item = listTarget[i];
            if(!tab[tapId] || tab[tapId].env !== "prod"){//Todo Need refactor dont use read each line anymore
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
                    commentTemp = item;
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
                            var node = new TargetNode(currentQueryList[j],currentMedia,commentTemp);
                            result.push(node);
                            currentNodes.push(node);
                        }
                        currentQueryList = "";
                        continue;
                    }

                    var node = new TargetNode(query,currentMedia,commentTemp);
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
                        continue;
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
            else {
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
                    if(item.indexOf('{') === -1){
                        continue;
                    }
                }
                if (item.indexOf('{') > -1) {
                    //new node
                    var query = item.split('{')[0];
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
                        for (var j = 0; j < currentNodes.length; j++) {
                            currentNodes[j].newStyle(item.split('{')[1]);
                        }
                        continue;
                    }

                    var node = new TargetNode(query,currentMedia);
                    result.push(node);
                    currentNode = node;
                    currentNode.newStyle(item.split('{')[1]);
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
                if(item.indexOf('}') > -1){
                    //end node
                    currentNode = undefined;
                    currentNodes = [];
                }
                if(item.indexOf('}}') > -1){
                    //end mediaQuery
                    currentMedia = undefined;
                }
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
                if (item.indexOf('{') === -1) {
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
    return validator;
})();

