function validateForm1() {
     //define a variable named x, storing value from the HTML from firstname box
	 var x = document.forms["myForm1"]["name"].value;
	 //if the value x is equal to nothing, show the alert and not submit
	 if (x == "") {
	     alert("Name must be filled out");
	      return false;
     }
	 //y holds email entry
	 var y= document.forms["myForm1"]["Email"].value;
	 //check y is not empty
	 if (y == "") {
	     alert("Email must be filled out");
		 return false
		 }
	 //y holds email entry
	 var z= document.forms["myForm1"]["Phone Number"].value;
	 //check y is not empty
	 if (z == "") {
	     alert("Phone number must be filled out");
		 return false
		 }
		 //y holds email entry
	 var w= document.forms["myForm1"]["Order Detail"].value;
	 //check y is not empty
	 if (w == "") {
	     alert("Please enter your order details");
		 return false
		 }
}
