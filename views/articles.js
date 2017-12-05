/*global Article*/
/*global Articles*/
/*global $*/

window.addEventListener("load", function(){
    //declare the array for the articles
    var articles = new Articles();
    //get all the articles
    var articlesRequest = articles.getArticles();
    //after the api response, display all articles on the page
    articlesRequest.then(articlesDisplay);
    
    //function to display the articles
    function articlesDisplay(){
        //get the container for the articles
        var container = document.getElementsByClassName("article-container")[0];
        
        for(let i = 0; i < articles.articleArray.length; i++){
            //create a container for each article
            var articleElement = document.createElement("article");
            articleElement.classList.add("article-pages");
            //get the article id, that will be used next for getting 
            //the comments for each article
            articleElement.id = articles.articleArray[i].id;
            //add class to be used on pagination.js
            articleElement.classList.add("js-art-pg");
            
            //create a header for the article's title
            var articleElementTitle = document.createElement("h2");
            articleElementTitle.innerHTML = articles.articleArray[i].title;
            //class for styling purposes
            articleElementTitle.classList.add("h2Title");
            articleElementTitle.id = articles.articleArray[i].id;
            //event listener to go to the page of the whole article and comments
            articleElementTitle.addEventListener("click",displayArticlePage);
            
            //create a paragraph for the article's body
            var articleElementBody = document.createElement("p");
            articleElementBody.innerHTML = articles.articleArray[i].body;
            //class for styling purposes
            articleElementBody.classList.add("artP");
            articleElementBody.classList.add("artBody");
            articleElementBody.id = articles.articleArray[i].id;
            //event listener to go to the page of the whole article and comments
            articleElementBody.addEventListener("click",displayArticlePage);
            
            var articleElementImg = document.createElement("img");
            //class for styling purposes
            articleElementImg.classList.add("artImg");
            articleElementImg.id = articles.articleArray[i].id;
            //event listener to go to the page of the whole article and comments
            articleElementImg.addEventListener("click",displayArticlePage);
            
            articleElement.appendChild(articleElementImg);
            articleElement.appendChild(articleElementTitle);
            articleElement.appendChild(articleElementBody);
            
            container.appendChild(articleElement);
        }
        //separate the articles on pages 
         $(".pagination").pagination({
        itemsToPaginate:".js-art-pg"
    });
    }
    
    //use the id to display the page for the clicked article
    function displayArticlePage(event){
        let id = event.target.id;
        window.location.href = `https://preview.c9users.io/iulia34/my-online-cv/my-online-cv/pages/article.html?id=${id}`;
                               
    }
    
  
})