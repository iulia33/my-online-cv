/* global Comment*/
/* global Comments*/
/*global NewComment*/

//function to get the id for the article that was clicked
function getUrlParam(name){
   var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
   if(results == null){
       return null;
   }else{
       return results[1] || 0;
   }
} 

let postId = getUrlParam("id");
   
window.addEventListener("load", function(){
   //declare the array for the comments   
   var artComments = new Comments();
   //get the comments for the article
   var getComments = artComments.getCommentsForPost(postId);
   //after the api response, display the comments on the article page
   getComments.then(displayComments).then(addComment);
  
  //function that displays the comments
   function displayComments(){
      //get the container for the comments
       const artElement = document.getElementsByTagName("article")[0];
       
       for (var i = 0; i < artComments.commArray.length; i++){
          //create the container for each comment
           const commSection = document.createElement("section");
           commSection.classList.add("commSection");
           
           //create the user image
           const userImg = document.createElement("img");
           userImg.classList.add("userImg");
           
           //create the comment body
           const commBody = document.createElement("p");
           commBody.innerHTML = '"' + artComments.commArray[i].body + '"';
          
          //create the span that contains the user's name
           const commUser = document.createElement("span");
           commUser.innerHTML = artComments.commArray[i].name;
          
           //append user's name,image and body to the comment container
           commSection.appendChild(userImg);
           commSection.appendChild(commUser);
           commSection.appendChild(commBody);
          
           //append the comment container to the article
           artElement.appendChild(commSection);
       }
   }
   
   //creating the html for the name and text box input
   function addComment(){
       
       //add the new comment to the existing article
       const artElement = document.getElementsByTagName("article")[0];
       
       //create section for input the new cooment
       const newCommSection = document.createElement("section");
       newCommSection.classList.add('commSection');
       
       //create input for the user's name
       const nameInput = document.createElement("input");
       nameInput.setAttribute("type","text");
       nameInput.setAttribute("placeholder","Your name here...");
       nameInput.setAttribute("id","js-name");
       nameInput.classList.add("nameInput");
       
       //create input for the user's email
       const emailInput = document.createElement("input");
       emailInput.setAttribute("type","email");
       emailInput.setAttribute("placeholder","Your email here...");
       emailInput.setAttribute("id","js-email");
       emailInput.classList.add("emailInput");
       
       //create input for comment box
       const commentBox = document.createElement("textarea");
       commentBox.setAttribute("cols","50");
       commentBox.setAttribute("rows","5");
       commentBox.setAttribute("placeholder","Your comment here...");
       commentBox.setAttribute("id","js-comment");
       commentBox.classList.add("commentBox");
       
       //create button to post new comment
       const postCommBtn = document.createElement("input");
       postCommBtn.setAttribute("type","button");
       postCommBtn.setAttribute("value","Add Comment");
       postCommBtn.classList.add("postCommBtn");
       //on click, post new comment
       postCommBtn.addEventListener("click",addNewComment);
       
       newCommSection.appendChild(nameInput);
       newCommSection.appendChild(emailInput);
       newCommSection.appendChild(commentBox);
       newCommSection.appendChild(postCommBtn);
       artElement.appendChild(newCommSection);
    }  

   //function to get the input
   function addNewComment(){
      let newName = document.getElementById("js-name").value;
      let newEmail = document.getElementById("js-email").value;
      let newBody = document.getElementById("js-comment").value;
      let data = {
         "postId" : postId,
         "id" : artComments.commArray.length + 1,
         "name" : newName,
         "email" : newEmail,
         "body" : newBody,
      };
      
      //add new comment to the comments array
     artComments.commArray.push(data);
     console.log(artComments.commArray);
     //function for displaying the new comment
     displayNewComment(data);
     //move the comment input section for the comment to the end of the page
     addComment(); 
   }
   
   function displayNewComment(data){
        //get the container for new comment
       const artElement = document.getElementsByTagName("article")[0];
       //remove comment input section
       artElement.removeChild(artElement.lastChild);
       //create the container for new comment
       const commSection = document.createElement("section");
       commSection.classList.add("commSection");
       
       //create the user image
       const userImg = document.createElement("img");
       userImg.classList.add("userImg");
       
       //create the comment body
       const commBody = document.createElement("p");
       commBody.innerHTML = '"' + data.body + '"';
      
      //create the span that contains the user's name
       const commUser = document.createElement("span");
       commUser.innerHTML = data.name;
      
       //append user's name,image and body to the comment container
       commSection.appendChild(userImg);
       commSection.appendChild(commUser);
       commSection.appendChild(commBody);
      
       //append the comment container to the article
       artElement.appendChild(commSection);
   }
});