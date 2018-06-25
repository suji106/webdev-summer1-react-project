let _singleton = Symbol();
const COMMENT__URL =
    'http://nucode-java.herokuapp.com/api/PID/comment';

class CommentService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    createComment(comment, projectId, callback) {
        console.log(comment);
        console.log(projectId);
        fetch(COMMENT__URL.replace('PID', projectId),
            {
                body: JSON.stringify({comment: comment}),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post',
                credentials: 'include'
            }
        ).then(callback);
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CommentService(_singleton);
        return this[_singleton]
    }


}

export default CommentService;