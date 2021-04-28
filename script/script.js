
var objPeople = [
	{
		firstname: 'sam',
		lastname:'san',
		email:'san@gmail.com',
		password: 'password25'
	},
	{
		firstname: 'matt',
		lastname:'san',
		email:'san@gmail.com',
		password: 'password88'
	},
	{
		firstname: 'chris',
		lastname:'san',
		email:'san@gmail.com',
		password: 'password3'
	}
]

var alluser = JSON.parse(localStorage.getItem('users'));
	console.log(alluser);
// login functionality
function login() {
	// retreive data from username and store in username variable
	var email = document.getElementById('email').value
	// retreive data from password and store in password variable
	var password = document.getElementById('password').value



		// loop throught people array to see if the username is taken, or password to short
		for(var i = 0; i <alluser.length ; i++) {
			// check if new sername is equal to any already created usernames
		
			if(email == alluser[i].email && password == alluser[i].password) {
				// alert user that the username is take
				alert('login success');
				location.href = "./userlist.html";
				// stop the statement if result is found true
				
			// check if new password is 8 characters or more
			}
		}

	// loop through all the user pbjects and confrim if the username and password are correct
	
}
function insertNewRecord() {
	var table = document.getElementById("userlist").getElementsByTagName("tbody")[0];
	var alluser = JSON.parse(localStorage.getItem('users'));
	for(var i = 0; i < alluser.length; i++) {
			  var newRow = table.insertRow(table.length);
			  cell1 = newRow.insertCell(0);
			  cell1.innerHTML = alluser[i].firstname;

			  cell2 = newRow.insertCell(1);
			  cell2.innerHTML = alluser[i].lastname;
			  cell3 = newRow.insertCell(2);
			  cell3.innerHTML = alluser[i].email;
			  cell4 = newRow.insertCell(3);
			  cell4.innerHTML = alluser[i].password;
		}

}
// register functionality
function registerUser() {
	// store new users username
	var registerFirstName = document.getElementById('firstName').value
		var registerLastName = document.getElementById('lastName').value
		var registerEmail = document.getElementById('email').value
		
	// store new users password
	var registerPassword = document.getElementById('password').value
	if(!registerFirstName || !registerEmail || !registerLastName)
	{
		alert('all data is require');

	}
	else
	{
		var newUser = {
			firstname: registerFirstName,
			lastname:registerLastName,
			email:registerEmail,
			password: registerPassword
		}

				// loop throught people array to see if the username is taken, or password to short
		for(var i = 0; i <alluser.length ; i++) {
			// check if new sername is equal to any already created usernames
		
			if(registerEmail == alluser[i].email) {
				// alert user that the username is take
				alert('user alreday exist');

				//location.href = "./userlist.html";
				// stop the statement if result is found true
				return
			// check if new password is 8 characters or more
			}
		}
				objPeople.push(newUser);

				localStorage.setItem('users',JSON.stringify(objPeople));	
				 		
				location.href="./index.html";

		
		
		
		
	}
	
	

	// push new object to the people array
	
		// console the updated people array
	
	
}