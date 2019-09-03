function validateForm() {
     //define a variable named x, storing value from the HTML from firstname box
	 var x = document.forms["myForm"]["firstname"].value;
	 //if the value x is equal to nothing, show the alert and not submit
	 if (x == "") {
	     alert("Name must be filled out");
	      return false;
     }
	 //y holds email entry
	 var y= document.forms["myForm"]["email"].value;
	 //check y is not empty
	 if (y == "") {
	     alert("Email must be filled out");
		 return false
		 }
}
