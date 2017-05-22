const prompt = require('prompt');
const fs = require('fs');
const passwordHash = require('password-hash');
const confirm = require('prompt-confirm');

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
		var account = {};
		for (var userIn in input) {
			account.result = result
		};

		var jsonString = JSON.stringify(account, null, 2);

		if (!fs.existsSync('./accounts')) {
			fs.mkdirSync('./accounts')
		}

		var accountLocation = './accounts/'+result.Firstname+':'+result.Lastname+';'+result.BirthDay+':'+result.BirthMonth+':'+result.BirthYear+'.json'

			if (!fs.existsSync(accountLocation)){
				fs.writeFile(accountLocation, jsonString, 'utf-8');
				console.log('Your account has been stored in ' +  accountLocation);
			} else {
				console.log('Your account already exists...')
				var login = new confirm({
					type: 'confirm',
					name: 'login',
					message: 'Would you like to login?'
				});

				console.log(login);

				




		}


	}
});


// prompt('Enter your age');