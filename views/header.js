window.addEventListener("load", function(){
    
   //function to create the navbar
   function createNavBar(){
       //get the body element
       var pageBody = document.getElementsByTagName("body")[0];
       
       //create the navbar
       var navBar = document.createElement("div");
       navBar.classList.add("navbar");
       
       //create div for admin login,contact,search bar
       var infoBox = document.createElement("div");
       //add style
       infoBox.classList.add("infoBox");
       
       //create admin login link
       var adminLogin = document.createElement("a");
       adminLogin.setAttribute("href","#");
       adminLogin.innerHTML = "Admin Login";
       
       //create link for contact
       var contact = document.createElement("a");
       contact.setAttribute("href","#");
       contact.innerHTML ="<br>" + "Contact Us" + "<br>";
       
       //create search bar
       var searchBar = document.createElement("input");
       searchBar.setAttribute("type","text");
       searchBar.setAttribute("name","search");
       searchBar.setAttribute("placeholder","Search..");
       searchBar.classList.add("searchBar");
       
       //append elements to infoBox
       infoBox.appendChild(adminLogin);
       infoBox.appendChild(contact);
       infoBox.appendChild(searchBar);
       
       //append elements to navbar
       navBar.appendChild(blogTitle);
       navBar.appendChild(infoBox);
       
       //append navbar to the body of the page
       pageBody.appendChild(navBar);
   }
   
   createNavBar();
    
});