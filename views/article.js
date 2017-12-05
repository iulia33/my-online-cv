/*global Article*/

//get the clicked article's id
function getUrlParam(name){
   var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
   if(results == null){
       return null;
   }else{
       return results[1] || 0;
   }
} 
let id = getUrlParam("id");

window.addEventListener("load", function(){
    //get the article from the API
   var article = new Article();
   //display the article after the api response
   var articleRequest = article.getArticle(id);
   articleRequest.then(displayArticle);
   
   //display the article
   function displayArticle(){
       const artContainer = document.getElementsByTagName("article")[0];
       const artElement = document.createElement("article");
       artElement.classList.add("article-pages");
       
       const artElementTitle = document.createElement("h2");
       artElementTitle.classList.add("h2Title");
       artElementTitle.innerHTML = article.title;
       
       const artElementBody = document.createElement("p");
       artElementBody.classList.add("artP");
       artElementBody.innerHTML = article.body;
       artElementBody.classList.add("artP");
       
       const artElementImg = document.createElement("img");
       artElementImg.classList.add("artImg");
       
       
       artElement.appendChild(artElementImg);
       artElement.appendChild(artElementTitle);
       artElement.appendChild(artElementBody);
       
       artContainer.appendChild(artElement);
   }
});