let _singleton = Symbol();
const PROJECTS_USER_URL =
    'http://nucode-java.herokuapp.com/api/UID/requests/accepted';

class CommentServicce {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
        // this.resolve = this.resolve.bind(this);
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CommentServicce(_singleton);
        return this[_singleton]
    }


}

export default CommentServicce;