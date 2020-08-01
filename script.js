//alert("Hello world");
/*let greeting = "Aleksandra e provokator :)";
alert(greeting);
let age = 32;
let pi = 3.142;
let alphabet = "a";
alert(age +" / "+ pi +" / "+ alphabet);
alert(2+3);
let number1 = 2;
let number2 = 5;
let sum = number1 + number2;
alert("sum is "" + sum);
alert(1===1);
alert(1=="1");
function add(number1, number2) { 
	let sum = number1 + number2; 
	return sum; 
};
alert(add(10,15));
function alertMessage(message) { alert(message);};
alertMessage("proba funkcije");
let num1 = 20;
let num2 = 30;
let sumation = add(num1, num2);
alert(sumation);
var age = 25;
if (age < 18) {
	alert("You are not an adult");
} else {
	alert("You are an adult");
}
let fullName = {
	firstName: "John", lastName: "Doe"
}
alert(fullName.firstName);
let personDetails = {
	fullName: {
		firstName: 'Johnny',
		lastName: 'Depp'
	},
	alertMessage: function(message) {
		alert(message);
	}
}
personDetails.alertMessage('Hello world');
alert(personDetails.fullName.lastName);*/

function clickListener(event) {
	event.preventDefault();
	console.log('Button clicked');
} 

function emailValidate(email) {
	if(email.includes('@')) {
		return true;
	} else {
		return false;
	}
}

function validateNSFW(message) {
	if (message.includes('crap')) {
		return false
	} else {
		return true;
	}
}

function clickListener(event) {
	event.preventDefault();
	let emailInput = document.querySelector('\#email');
	let messageInput = document.querySelector('\#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;

	if (emailValidate(emailText) !==true) {
	console.log('The email adress must contain @'); 
	return false;
	}	
	if (validateNSFW(messageText) !==true) {
		console.log('Message can not contain unsafe words')
	return false;
	}
	console.log('email:', emailText, 'message:', messageText);
	console.log('Thanks for your message');
	
}

let submitButton = document.querySelector('\#submit-button');
console.log(submitButton);

submitButton.addEventListener('click', clickListener);


