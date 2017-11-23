/*global $*/
/*global Article*/

//create articles array with all the articles from the API
function Articles(){
    this.articleArray = [];    
}

//function that gets all the articles from API
Articles.prototype.getArticles = function(){
    var that = this; //keeping this to articleArray
    
    const articlesRootUrl = "https://jsonplaceholder.typicode.com/posts";
    
    //promise to get the articles from API
    return $.ajax({
        url:articlesRootUrl, 
        method:"GET"})
        .then(function(apiResponse){
            console.log(apiResponse);
            articlesDisplay(apiResponse);
        })
        .catch(function(error){
            console.log(error);
        });

    
    function articlesDisplay(apiResponse){
        for (let i = 0; i < apiResponse.length; i++){
            let art = new Article(apiResponse[i]);
            that.articleArray.push(art);
        }
    }
}