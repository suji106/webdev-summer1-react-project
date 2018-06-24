let _singleton = Symbol();
const USER_URL =
    'http://nucode-java.herokuapp.com/api/user';

class UserService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new UserService(_singleton);
        return this[_singleton]
    }

    updateProfile(profile, callback) {
        var resp = '';
        fetch(USER_URL + '/update',
            {
                body: JSON.stringify(profile),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'put',
                credentials: 'include'
            }
            ).then(function(response) {
            resp = response.json();
            console.log(resp);
            return resp;
        }).then(callback);
    }
}

export default UserService;
