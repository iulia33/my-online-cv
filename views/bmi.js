window.addEventListener("load", function(){
	const checkBmiBtn = document.getElementById("submit");
	checkBmiBtn.addEventListener("click",checkBMI);
	
	function checkBMI(){
		var name = document.getElementById("name").value;
		var height = document.getElementById("height").value;
		var weight = document.getElementById("weight").value;
		var gender = document.getElementById("gender").value;
		var bmi;
		var result;
		
		bmi = (weight/(height*height));
		bmi = Math.round(bmi);
		console.log(bmi);
		
		if (name == "" || weight == "" || height == ""){
			document.getElementById("result").innerHTML = "Please fill in required information!!!";
			return;
		}
		
		if (isNaN(height)|| isNaN(weight)){
			document.getElementById("result").innerHTML = "Wrong input!!!";
			return;
		}
		
		if (bmi < 18.5){
			result = "underweight";
		}else if((bmi >= 18.5) && (bmi < 25)){
			result = "normal";
		}else if ((bmi >=25) && (bmi < 30)){
			result = "overweight";
		} else {
			result = "obese";
		}
		
		document.getElementById("result").innerHTML = name + " you are " + result + ".";
		history.pushState({},"result","result?name:" + name + "&gender:" + gender + "height:"
			+ height + "weight:" + weight);
		
	}
		
});
