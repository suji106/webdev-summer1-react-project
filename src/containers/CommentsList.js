import React from 'react';
import CommentService from "../services/CommentService";
import Comment from "../components/Comment"

class CommentsList extends React.Component {
    constructor(props) {
        console.log("cons");
        super(props);
        this.state = {
            comments: [],
            created: '',
            projectId: 2,
            user: {
                userId: 22
            }
        }
        this.commentService = CommentService.instance;
        this.renderComment = this.renderComment.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({userId: newProps.params.userId})
    }

    componentDidMount() {
        console.log("commentMounted");
        var commentUrl = "http://nucode-java.herokuapp.com/api/PID/project/comments"
            .replace('PID', this.state.projectId);
        fetch(commentUrl).then(response => (response.json()))
            .then(comments => {
                console.log(comments)
                this.setState({
                    comments: comments
                })
            });

        console.log("commentCountSuccessful!")
        console.log(this.state);
    }

    renderComment(comment) {
        return (
            <h5>
                {comment}
            </h5>
        )
    }

    render() {
        console.log("renderingCommentsForProject");
        console.log(this.state)

        return (
            <div>
                <h1>
                    Comments
                </h1>
                <div>
                    {this.state.comments.map(comment => (
                        <Comment commentObject={comment}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default CommentsList;