var lnks = $('.obu a');

for (var i=0; i<lnks.length; i++) {
    var lnk = $(lnks[i]);
    if (lnk.text() === '[已注销]') {
        lnk.css({'background-color': 'red', padding: '2px 3px'});
    }
}
