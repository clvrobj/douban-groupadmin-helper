var g_lnks = $('a[href^="http://www.douban.com/group/"]:not(:has(img))');

for(i=0;i<g_lnks.length;i++){
    var group_link = g_lnks[i];
    function build_callback(group_link) {
        return function(data) {
              var quit_group_source_link = $('a[title="退出小组"]:first',data)[0];
              if (quit_group_source_link != undefined){
                var quit_link = quit_group_source_link.href;
                var quit_button = $('<a href="#">&gt;退组!</a>').click(
                        function() {
                            $.ajax({url: quit_link,
                                    success: function () {
                                        window.location.reload();
                                    }});
                        }
                );
                $(group_link).parent().append(quit_button);
              }
        };
    }
    if (group_link != undefined) {
        $.get(group_link.href, build_callback(group_link));
    }
}

