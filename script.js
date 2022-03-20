// api url
const api_url =
	"https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
	defaultrow(data);
	addRowHandlers(data)
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th> ID</th>
		<th>First Name</th>
		<th>Last Name</th>
		<th>Username</th>
		<th>Employee Title</th>
		<th>Country</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data) {
		tab += `<tr>
	<td>${r.id} </td>
	<td>${r.first_name} </td>
	<td>${r.last_name}</td>
	<td>${r.username}</td>
	<td>${r.employment.title}</td>	
    <td>${r.address.country}</td>		
	
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("user").innerHTML = tab;
}

function defaultrow(data)
{
	var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning ';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';
        document.getElementById('lblGreetings').innerHTML =
      '<b>' + greet +`<b> ${data[0].first_name}`;
	  const img = document.getElementById("avatar");
	  img.setAttribute("src", data[0].avatar);
	   		document.getElementById("id").innerHTML = `${data[0].id}`;
			document.getElementById("uid").innerHTML = `${data[0].uid}`;
			document.getElementById("pass").innerHTML = `${data[0].password}`;  
			document.getElementById("uname").innerHTML = `${data[0].first_name} ${data[0].last_name}`;
			document.getElementById("usrname").innerHTML = `${data[0].username}`;
			document.getElementById("mail").innerHTML = `${data[0].email}`;
			document.getElementById("mf").innerHTML = `${data[0].gender}`;
			document.getElementById("phno").innerHTML = `${data[0].phone_number}`;
			document.getElementById("sin").innerHTML = `${data[0].social_insurance_number}`;
			document.getElementById("dob").innerHTML = `${data[0].date_of_birth}`;
			document.getElementById("title").innerHTML = `${data[0].employment.title}`;
			document.getElementById("skill").innerHTML = `${data[0].employment.key_skill}`;
			document.getElementById("addr").innerHTML = `${data[0].address.city}, ${data[0].address.state}, ${data[0].address.country}`  ;
			document.getElementById("ccn").innerHTML = `${data[0].credit_card.cc_number}`;
			document.getElementById("ss").innerHTML = `${data[0].subscription.status}`;
	
}

		function addRowHandlers(data) {
			var table = document.getElementById("user");
			var rows = table.getElementsByTagName("tr");
			for (i = 0; i < rows.length; i++) {
			  var currentRow = table.rows[i];
			  var createClickHandler = function(row) {
				return function() {
				  var cell = row.getElementsByTagName("td")[0];
				  var id = cell.innerHTML;
				  for (let i = 0; i< data.length; i++) {
					if (data[i].id == id) {
						const img = document.getElementById("avatar");
						img.setAttribute("src", data[i].avatar);
			document.getElementById("id").innerHTML = `${data[i].id}`;
			document.getElementById("uid").innerHTML = `${data[i].uid}`;
			document.getElementById("pass").innerHTML = `${data[i].password}`;  
			document.getElementById("uname").innerHTML = `${data[i].first_name} ${data[i].last_name}` ;
			document.getElementById("usrname").innerHTML = `${data[i].username}`;
			document.getElementById("mail").innerHTML = `${data[i].email}`;
			document.getElementById("mf").innerHTML = `${data[i].gender}`;
			document.getElementById("phno").innerHTML = `${data[i].phone_number}`  ;
			document.getElementById("sin").innerHTML = `${data[i].social_insurance_number}`  ;
			document.getElementById("dob").innerHTML = `${data[i].date_of_birth}`  ;
			document.getElementById("title").innerHTML = `${data[i].employment.title}` ;
			document.getElementById("skill").innerHTML = `${data[i].employment.key_skill}`  ;
			document.getElementById("addr").innerHTML = `${data[i].address.city}, ${data[i].address.state}, ${data[i].address.country}`  ;
			document.getElementById("ccn").innerHTML = `${data[i].credit_card.cc_number}`   ;
			document.getElementById("ss").innerHTML = `${data[i].subscription.status}`   ;
		
			
		
			if( document.documentElement.clientWidth <= 480)
		{
			var element = document.getElementsByClassName("container1");
			let elementposition = element.getBoundingClientRect();
			window.scrollTo(0,elementposition.top)
		}
		

						//user greedting
		var myDate = new Date();
    	var hrs = myDate.getHours();

    	var greet;

    	if (hrs < 12)
        greet = 'Good Morning ';
    	else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    	else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';
        document.getElementById('lblGreetings').innerHTML =
     	 '<b>' + greet +`<b> ${data[i].first_name}`;
	  
	
						
					}
					}
				};
			  };
			  currentRow.onclick = createClickHandler(currentRow);
			}
		  }

