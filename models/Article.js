/*global $*/

//create article with ES6
// function Article{
//     constructor(defaultData){
//         this.userId = defaultStatus.userId;
//         this.id = defaultData.id;
//         this.title = defaultData.title;
//         this.body = defaultData.body;
// }


//create article with classic JS
function Article(defaultData){
    defaultData = defaultData || {};
    this.userId =  defaultData.userId;
    this.id = defaultData.id;
    this.title = defaultData.title;
    this.body = defaultData.body;
}
//get 100 articles from API
Article.prototype.getArticle = function(id){
    var that = this;
    const articleUrl = "https://jsonplaceholder.typicode.com/posts/" + id;
    
    return $.ajax({
        url: articleUrl,
        method:"GET"})
    .then(function(apiResponse){
        console.log(apiResponse);
        that.userId = apiResponse.userId;
        that.id = apiResponse.id;
        that.title = apiResponse.title;
        that.body = apiResponse.body;
    })
    .catch(function(error){
        console.log(error);
    });
}