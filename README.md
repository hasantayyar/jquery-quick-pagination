
Usage
=======================

    $("ul.pagination1").quickPagination();



    function scrolltop() {
        window.scrollTo(0, 0);
    }
    $("ul#list").quickPagination({pageSize: 1, pagerLocation: "bottom"}, scrolltop());
    
    


    $("ul#jlist").quickPagination({pageSize: 1, pagerLocation: "bottom"}, scrolltop(),function(){console.log("pager clicked")});
