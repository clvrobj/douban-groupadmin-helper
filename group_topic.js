var lnks = $('.topic-opt a'), ban, del;

for (var i = 0; i<lnks.length; i++) {
    var lnk = $(lnks[i]);
    if (lnk.text() === '封禁') {
        ban = lnk;
    } else if (lnk.text() === '删除') {
        del = lnk;
    }
}

if (ban && del) {
    var ban_del = $('<a href="#">&gt;封禁并删除</a>').click(
        function () {
            $.ajax({url: ban.attr('href'),
                    success: function () {
                        open(del.attr('href'));
                    }});
        }
    );
    $('.topic-opt').append(ban_del);
}
