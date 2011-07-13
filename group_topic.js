var lnks = $('.topic-opt a'),
ban = $(".topic-opt a:contains('封禁')"),
del = $(".topic-opt a:contains('删除')");

if (ban[0] && del[0]) {
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
