var axios = require('axios');

const LoginAPI = {

	tryLogin: function(email, password) {
		return axios.post("/login", {
						email: email,
						password: password
					})
					.then(function (response) {
						console.log(response);
						return response.data;
					})
					.catch(function (response) {
						console.log(response);
						return response.data;
					});
	},
	logout: function() {
		return axios.get("/logout")
					.then(function (response) {
						console.log(response);
						return response.data;
					})
					.catch(function (response) {
						console.log(response);
						return response.data;
					});
	}

};

module.exports = LoginAPI;