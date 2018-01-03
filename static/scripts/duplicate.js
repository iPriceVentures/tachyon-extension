//do stuff with the script
var script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js";
document.head.appendChild(script);

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
    var target = $('#target').val();
    var script = Script.parse(target);
    console.log(script);
}

// 0|120|319|0|0|0|500|802|602
// 1|120|319|0|0|0|550|802|602
// 0|434|463|0|0|0|1000|802|602
// 1|434|463|0|0|0|1050|802|602
// 0|594|394|0|0|0|1500|802|602
// 1|594|394|0|0|0|1550|802|602
function Script(){
    this.nodes= [];
    this.addNode =function(node){
        this.nodes.push(node);
    }
}
Script.parse=function (str){
    var list = str.split('\n');
    var script = new Script();
    list.forEach(item => {
        if(item.indexOf('0') === 0
)
    {
        script.addNode(ScriptNode.parse(item));
    }
});
    return script;
}
//Base
function ScriptNode(x,y,timeTap){
    this.x = y;
    this.y = y;
    this.timeTap = timeTap;
    calulateTimeUnTap(timeTap);
    function calulateTimeUnTap(timeTap){
        this.timeUnTap = this.timeTap + 50;
    }
}
// 0|594|394|0|0|0|1500|802|602
ScriptNode.parse= function(str){
    var arr = str.split('|');
    var x = arr[1];
    var y = arr[2];
    var timeTap = arr[6];
    return new ScriptNode(x,y,timeTap);
}
