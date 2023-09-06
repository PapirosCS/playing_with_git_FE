class AuthModule {

    constructor(API_URL) {
        this.API_URL = API_URL;
    }

    // Calls the API to create a new user
    async createUser(firstName, lastName, email, password) {
        const response = await fetch(this.API_URL + "/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                'email': email,
                'password': password,
                'firstName': firstName,
                'lastName': lastName
            },
        });

        response.json().then((r) => {
            // User was successfully created
            return true;
        }).catch((error) => {
            return false;
        });
    }

    // Calls the API for login
    async login(email, password) {
        const response = await fetch(this.API_URL + "/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                'email': email,
                'password': password
            },
        });

        response.json().then((r) => {
            // Sets the auth token in the local storage
            localStorage.setItem('authToken', r.body.token);
            return new User(r.body.firstName, r.body.lastName, email, 0);
        }).catch((error) => {
            return null;
        });
    }

    // Destroys the local user token for signing out
    logout() {
        localStorage.removeItem('authToken');
    }
}