const prompt = require('prompt');
const fs = require('fs');

prompt.start();

console.log("It has begun");

var input = [
	'username',
	'Firstname',
	'Lastname',
	'age',
	'BirthMonth', 'BirthDay', 'BirthYear',
	'hair colour',
	'Favourite food'
]

var userInput = {};

prompt.get(input, function(err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log("Account has been registered");
		// console.log("	Username:" + result.username);
		// console.log("	password:" + result.password);
		var account = {};
		for (var userIn in input) {
			account.result = result
		};

		var jsonString = JSON.stringify(account);

		if (!fs.existsSync('./accounts')) {
			fs.mkdirSync('./accounts')
		}

		var accountLocation = './accounts/'+result.Lastname+','+result.Firstname+','+result.BirthDay+':'+result.BirthMonth+':'+result.BirthYear+'.json'

		fs.writeFile(accountLocation, jsonString, 'utf-8');

		console.log('Your account has been stored in ' +  accountLocation);

	}
});

// if (name === string) {
// 	confirm('Are you ready to continue to the site?');
// } else {
// 	console.log('That is not a real name... please enter your name...');
// 	var name2 = prompt("What's your name?");

// 	if (name2 === string) {
// 		confirm('Are you ready to continue to the site?');
// 	}
// }

// prompt('Enter your age');