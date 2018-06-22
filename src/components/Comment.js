import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("renderingProjectsForUser");

        return (
            < div className="dialogbox">
                <div className="body">
                    <h4>
                        {this.props.commentObject.userType}
                    </h4>
                    <span className="tip tip-left"></span>
                    <div className="message">
                                    <span className={this.props.commentObject.userType}>
                                        {this.props.commentObject.comment}
                                    </span>
                    </div>
                    <h5>
                        -{this.props.commentObject.user.name}
                    </h5>
                </div>
            </div>
        )
    }
}

export default Comment;