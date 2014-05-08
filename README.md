
Usage
=====


    $("ul.pagination1").quickPagination();


_____

    function scrolltop() {
        window.scrollTo(0, 0);
    }
    $("ul#list").quickPagination({pageSize: 1, pagerLocation: "bottom"}, scrolltop());
    
_____
    

    $("ul#jlist").quickPagination({pageSize: 1, pagerLocation: "bottom"}, scrolltop(),function(){console.log("pager clicked")});
