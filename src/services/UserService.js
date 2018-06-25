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

    createUser(user, callback) {
        console.log(user);
        // var newUser = {
        //     name: '',
        //     email: '',
        //     created: '',
        //     imageUrl: 'https://i.ndtvimg.com/i/2018-03/sachin-tendulkar-facebook_806x605_41522254726.jpg',
        //     linkedinUrl: '',
        //     githubUrl: '',
        // };
        // newUser['email'] = user.email;
        // newUser['name'] = user.name;
        fetch(USER_URL + '/admin',
            {
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post',
                credentials: 'include'
            }
        ).then(callback);
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
        ).then(function (response) {
            resp = response.json();
            console.log(resp);
            return resp;
        }).then(callback);
    }

    deleteUser(userId, callback) {
        var resp = '';
        fetch(USER_URL + '/' + userId,
            {
                method: 'delete',
                credentials: 'include'
            }
        ).then(callback);
    }
}

export default UserService;
