/*global $*/
/*global Comment*/
//define the comments' array for one article
function Comments(){
    this.commArray = [];
}

//get the comments for one article
Comments.prototype.getCommentsForPost = function(postId){
    var that = this;
    const commentsUrl = "https://jsonplaceholder.typicode.com/comments?postId=" + postId;
    return $.ajax({
        url:commentsUrl,
        method:"GET"
    }).then(function(apiResponse){
        console.log(apiResponse);
        commentsForArticle(apiResponse);
    }).catch(function(error){
        console.log(error);
    });
    
    function commentsForArticle(apiResponse){
        for (var i = 0; i < apiResponse.length; i++){
            let comm = new Comment(apiResponse[i]);
            that.commArray.push(comm);
        }
    }
}