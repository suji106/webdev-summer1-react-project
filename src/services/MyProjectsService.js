let _singleton = Symbol();
const PROJECTS_USER_URL =
    'http://nucode-java.herokuapp.com/api/UID/requests/accepted';

class MyProjectService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
        this.resolve = this.resolve.bind(this);
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new MyProjectService(_singleton);
        return this[_singleton]
    }

    getProjectsByUserId(userId) {
        var url = PROJECTS_USER_URL.replace('UID', userId);
        var resp = "none";
        fetch(url).then(function(response) {
            resp = response.json();
            console.log(resp);
            return resp;
        });
    }

    resolve(j) {
        var x = j.json();
        console.log(x);
        return x;
    }
}

export default MyProjectService;