/*global $*/

    $.fn.pagination=function(options){
        
        //create html for the pagination
        const container = document.getElementsByClassName("article-container")[0];
        let paginateContainer = document.createElement("article");
        paginateContainer.classList.add("pagination");
        container.appendChild(paginateContainer);
        
        //the page will have maximum 5 items
        let defaults = {
            itemsPerPage : 5
        };
        
        //
        let settings = {};
        
        $.extend(settings,defaults,options);
        const   itemsPerPage = settings.itemsPerPage;
        
        let itemsToPaginate = $(settings.itemsToPaginate);
        //calculate the number of links needed to paginate
        let numberOfPaginationLinks = Math.ceil(itemsToPaginate.length/itemsPerPage);
        
        $("<ul></ul>").prependTo(paginateContainer).addClass("ul-pagination");
        
        for(let i = 0; i< numberOfPaginationLinks; i++){
            $(".ul-pagination").append("<li>"+ (i + 1) +"</li>");
        }
        
        itemsToPaginate.filter(":gt("+(itemsPerPage-1)+")").hide();
               
        //add eventlistener so that when one clicks page 2, can see items corresponding
        //to page 2
        $("ul li").on("click", function(){
           //select the text inside the li tag
           let linkNumber = $(this).text();
           //hide items that come before the selected  page    
           let itemsToHide = itemsToPaginate.filter(
               ":lt("+((linkNumber - 1)*itemsPerPage)+")");
           //hide items that come after the selected page
           $.merge(itemsToHide, itemsToPaginate.filter(
               ":gt("+((linkNumber*itemsPerPage) - 1)+")"));
               
            itemsToHide.hide();
           let itemsToShow = itemsToPaginate.not(itemsToHide);
           itemsToShow.show();
        });
    }
