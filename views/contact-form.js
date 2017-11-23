

window.addEventListener("load", function(e){
    var submitBtn = document.getElementsByClassName("submit")[0];
    submitBtn.addEventListener("click", function (e){
        var name = document.getElementById("js-name");
        var email = document.getElementById("js-email");
        var mess = document.getElementById("js-mess");
        var nameInput = name.value;
        var emailInput = email.value;
        var messInput = mess.value;
        var nameClasses = name.classList;
        var emailClasses = email.classList;
        var messClasses = mess.classList;
        var error = document.getElementById("js-error");
        var dMess = document.getElementById("js-display-message");
       
      if (nameInput === ""){
          nameClasses.add("red-border");
          e.preventDefault();
      }else if (emailInput === ""){
          emailClasses.add("red-border");
          e.preventDefault();
      }else if (messInput === ""){
          messClasses.add("red-border");
          e.preventDefault();
      }
      if ((nameInput === "")||(emailInput === "")||(messInput === "")){
            error.innerHTML = "Please fill in mandatory fields!";
            error.style.color = "red";
      }else {
          error.style.display = "none";
          nameClasses.remove("red-border");
          emailClasses.remove("red-border");
          messClasses.remove("red-border");
          dMess.innerHTML = "Thank you for contacting us, " + nameInput + "!";
          dMess.style.margin = "50px 0 30px 450px";
      }
       
    });
});