// Saves options to chrome.storage

function save_options() {
    //Todo Should enable adjust tachyons classes
    var tachyons = $('#tachyons').val();
    var baseRem = $('#base-rem').val();
    var ignoreClasses = $('#ignore-classes').val();
    var tachyonOptions ={
        ignoreClasses: ignoreClasses,
        baseRem: baseRem
    };
    chrome.storage.sync.set(
        {
            tachyonOptions: tachyonOptions
        }, function () {
            // Update status to let user know options were saved.
            var status = document.getElementById('status');
            status.textContent = 'Options saved.';
            setTimeout(function () {
                status.textContent = '';
            }, 750);
        });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get(['tachyonOptions'], function(items) {
        var options = items.tachyonOptions || {};
        $('#tachyons').val(options.tachyons || $('#tachyons-default').val());
        $('#ignore-classes').val(options.ignoreClasses || $('#ignore-classes-default').val());
        $('#base-rem').val(options.baseRem || $('#base-rem-default').val());
    })
}
document.addEventListener('DOMContentLoaded', restore_options);
$(document).ready(function(){
    $('#save').click(save_options);
})
