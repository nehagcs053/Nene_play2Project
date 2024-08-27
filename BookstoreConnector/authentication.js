
module.exports = {
	label: "Connect to BookstoreConnector",
	mock_input: {
		username: "testuser",
		password: "manage"
	},
	validate: function (input, output) {
		// auth data will be available in input.auth
		// var username = input.auth.username
		// var password = input.auth.password
		// for sending success use standard node callback
		 output(null, "Success")
		//output("Invalid Connection", null);
	}
}