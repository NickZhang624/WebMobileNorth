//find the class .add in the html and add to price
var price = document.querySelectorAll('.add');
//create array
var cartArray = Array();
//find the element with an id of 'cart-list'
var cartList = document.getElementById('cart-list');
var grandTotal = 0.00;

//for every element with a class called 'price'
for (var i = 0; i < price.length; ++i) {
	//add an event listener "click" to price which will call addRow function
    price[i].addEventListener('click', addRow);
}

function addRow() {
	//push adds new items to end of array. price of item selected is assigned to array
    cartArray.push(this.dataset.price);

	//new row created
    var new_row = document.createElement('tr');
	
	//new row assigned the add to cart item price (insert cell is putting in a <td>)
    new_row.insertCell(0).innerHTML = this.dataset.price;
	//new_row also assigned delete <a href> link shown next to item in list (for user to delete)
    new_row.insertCell(1).innerHTML = "<a href='#/' onclick='deleteRow(this)' id=''>Remove</a>";
    //adds new_row info (from above) to html id cart-list
	document.getElementById("cart-list").appendChild(new_row);
	//calls getSum function, gets the sum of the numbers in the array
    grandTotal = cartArray.reduce(getSum, 0);
	//displays currency grandtotal amount to html id grandtotal
    document.getElementById("grandtotal").innerHTML = grandTotal.toFixed(2);
}

function deleteRow(row) {
    //get the parent node (this <td>) then get its parent (its <tr>) then get the index of it.
    i = row.parentNode.parentNode.rowIndex;
    //v will hold the price i.e. 12.00 in the row being deleted
	var v = cartArray[i];
    //x will be array item number matching price to be deleted i.e. 12.00
	var x = cartArray.indexOf(v);
	//splice out (delete out) that particular row num from array
    if (x != -1) {
        cartArray.splice(x, 1);
    }
	//delete row number from html id cart-list (indicated by i)
    document.getElementById("cart-list").deleteRow(i);

	//reduce grandtotal figure, removing item tot
    grandTotal = cartArray.reduce(getSum, 0);
	//display updated grandtotal figure
    document.getElementById("grandtotal").innerHTML = grandTotal.toFixed(2);
}
//
function getSum(total, num) {
    return Number(total) + Number(num);
}