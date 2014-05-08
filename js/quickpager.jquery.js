(function ($) {
    $.fn.quickPagination = function (options,fn) {
        var defaults = {
            pageSize: 10,
            active: 1,
            holder: null,
            pagerLocation: "after"
        };
        var options = $.extend(defaults, options);
        return this.each(function () {
            var selector = $(this);
            var pageCounter = 1;
            selector.wrap("<div class='pagerContainer'></div>");
            selector.parents(".pagerContainer").find("ul.pagerNav").remove();
            selector.children().each(function (i) {
                if (i < pageCounter * options.pageSize && i >= (pageCounter - 1) * options.pageSize) {
                    $(this).addClass("pagerPage" + pageCounter);
                } else {
                    $(this).addClass("pagerPage" + (pageCounter + 1));
                    pageCounter++;
                }
            });
            selector.children().hide();
            selector.children(".pagerPage" + options.active).show();
            if (pageCounter <= 1) {
                return;
            }
            var pageNav = "<ul class='pagerNav pagination row' style='clear:both'>";
            for (i = 1; i <= pageCounter; i++) {
                if (i == options.active) {
                    pageNav += "<li class='active pageNav" + i + "'><a rel='" + i + "' href='#'>" + i + "</a></li>";
                } else {
                    pageNav += "<li class='pageNav" + i + "'><a rel='" + i + "' href='#'>" + i + "</a></li>";
                }
            }
            pageNav += "</ul>";
            if (!options.holder) {
                switch (options.pagerLocation) {
                case "before":
                    selector.before(pageNav);
                    break;
                case "both":
                    selector.before(pageNav);
                    selector.after(pageNav);
                    break;
                default:
                    selector.after(pageNav);
                }
            } else {
                $(options.holder).append(pageNav);
            }
            selector.parent().find(".pagerNav a").click(function () {
                var clickedLink = $(this).attr("rel");
                options.active = clickedLink;
                if (options.holder) {
                    $(this).parent("li").parent("ul").parent(options.holder).find("li.active").removeClass("active");
                    $(this).parent("li").parent("ul").parent(options.holder).find("a[rel='" + clickedLink + "']").parent("li").addClass("active");
                } else {
                    $(this).parent("li").parent("ul").parent(".pagerContainer").find("li.active").removeClass("active");
                    $(this).parent("li").parent("ul").parent(".pagerContainer").find("a[rel='" + clickedLink + "']").parent("li").addClass("active");
                }
                selector.children().hide();
                selector.find(".pagerPage" + clickedLink).show();
                fn && fn();
                return false;
            });
        });
    }
})(jQuery);
