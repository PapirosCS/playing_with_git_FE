function AuthModule(API_URL) {
    this.API_URL = API_URL;

    // Calls the API to create a new user
    this.createUser = function(firstName, lastName, email, password) {}

    // Calls the API for login
    this.login = function(email, password) {}

    // Destroys the local user token for signing out
    this.logout = function() {}
}