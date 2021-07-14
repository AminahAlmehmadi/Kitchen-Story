
function search() {
	
	var input, filter, table, tr, td, i, txtValue,item;
	input = document.getElementById('myInput');
	filter = input.value.toUpperCase();
	table = document.getElementById("list");
	table.style.visibility='hidden';
	tr = table.getElementsByTagName('tr');
	
	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[0];
	  if(td){
	    txtValue = td.textContent || td.innerText;
	    if (txtValue.toUpperCase()==(filter)) {
		  item=txtValue;
	      }else {  
	  }}}
	  if(item==null){
		  alert("Sorry! Product Not Found!");}
		  else{
			  alert("The Product is Available, You can Buy It From The Products Tab. Thanks! ");
			  ser.href("menu.html");
		  }
	  }


//add new key=>value to the HTML5 storage
function SaveItem() {
			
	var product = document.forms.ShoppingList.product.value;
	var data = document.forms.ShoppingList.data.value;
	localStorage.setItem(product, data);
	doShowAll();
	
}
//------------------------------------------------------------------------------
//change an existing key=>value in the HTML5 storage
function ModifyItem() {
	var product1 = document.forms.ShoppingList.product.value;
	var data1 = document.forms.ShoppingList.data.value;
	//check if name1 is already exists
	
//check if key exists
			if (localStorage.getItem(product1) !=null)
			{
			  //update
			  localStorage.setItem(product1,data1);
			  document.forms.ShoppingList.data.value = localStorage.getItem(product1);
			}
		
	
	doShowAll();
}
//-------------------------------------------------------------------------
//delete an existing key=>value from the HTML5 storage
function RemoveItem() {
	var product = document.forms.ShoppingList.product.value;
	document.forms.ShoppingList.data.value = localStorage.removeItem(product);
	doShowAll();
}
//-------------------------------------------------------------------------------------
//restart the local storage
function ClearAll() {
	localStorage.clear();
	doShowAll();
}
//--------------------------------------------------------------------------------------
// dynamically populate the table with shopping list items
//below step can be done via PHP and AJAX too. 
function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Item</th><th>Value</th></tr>\n";
		var i = 0;
		//for more advance feature, you can set cap on max items in the cart
		for (i = 0; i <= localStorage.length-1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		//if no item exists in the cart
		if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		//bind the data to html table
		//you can use jQuery too....
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot save shopping list as your browser does not support HTML 5');
	}
}

/*
 =====> Checking the browser support
 //this step may not be required as most of modern browsers do support HTML5
 */
 //below function may be redundant
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}

function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length < 8){
        alert('Less of 8 character');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        sessionStorage.setItem('name', name.value);
        sessionStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

//checking
function check(){
    var storedName = sessionStorage.getItem('name');
    var storedPw = sessionStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('Welcome, You are logged in.');
        lgin.href="admin_page.html";
    }else{
        alert('Username or password incorrect, please try again!');
    }
}

//change password
function changePW(){
    var memoPw = sessionStorage.getItem('pw');
    var oldPw = document.getElementById('oldPW');
    var newPW = document.getElementById('newPW');

    if(oldPw.value == memoPw){
        sessionStorage.setItem('pw', newPW.value);
        alert('Your password has been updated');
       
    }else{
        alert('Your password does not change!');
    }

}

var total=0;
  
var arrHead = new Array();
    arrHead = ['', 'Item', 'Price']; // table headers.

    // first create a TABLE structure by adding few headers.
    function createTable() {
        var empTable = document.createElement('table');
        empTable.setAttribute('id', 'empTable');  // table id.

        var tr = empTable.insertRow(-1);

        for (var h = 0; h < arrHead.length; h++) {
            var th = document.createElement('th'); // the header object.
            th.innerHTML = arrHead[h];
            tr.appendChild(th);
        }

        var div = document.getElementById('cont');
        div.appendChild(empTable);    // add table to a container.
    }

    // function to add new row.
    function addRow(name,pric) {
		
        var empTab = document.getElementById('empTable');

        var rowCnt = empTab.rows.length;    // get the number of rows.
        var tr = empTab.insertRow(rowCnt); // table row.
        tr = empTab.insertRow(rowCnt);

        for (var c = 0; c < arrHead.length; c++) {
            var td = document.createElement('td');          // TABLE DEFINITION.
            td = tr.insertCell(c);

            if (c == 0) {   // if its the first column of the table.
                // add a button control.
                var button = document.createElement('input');

                // set the attributes.
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Remove');

                // add button's "onclick" event.
                button.setAttribute('onclick', 'removeRow(this)');

                td.appendChild(button);
            }
            if(c==1) {
                // the 2nd, 3rd and 4th column, will have textbox.
                var ele = document.createElement('input');
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', name);
				
                td.appendChild(ele);
				
            }
			if(c==2) {
                // the 2nd, 3rd and 4th column, will have textbox.
                var ele = document.createElement('input');
                ele.setAttribute('type', 'int');
                ele.setAttribute('value', pric);
                td.appendChild(ele);
				total+=pric;
            }
        }
    }
	function calculatePrice() {
		var totalDiv = document.getElementById("total");
		totalDiv.innerHTML = "Total: $" + total;
	  }

    // function to delete a row.
    function removeRow(oButton) {
        var empTab = document.getElementById('empTable');
        empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
    }
