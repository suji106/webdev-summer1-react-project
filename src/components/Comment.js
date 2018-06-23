import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("renderingProjectsForUser");
        var userType = this.props.commentObject.userType;
        var dialogClass = userType + '_dialog';
        var bodyClass = userType + '_body';
        var tipClass = userType + '_tip';
        var messageClass = userType + '_message'

        return (
            < div className={dialogClass}>
                <div className={bodyClass}>
                    <h4 className={messageClass}>
                        {this.props.commentObject.userType}
                    </h4>
                    <span className={tipClass}></span>
                    <div className={messageClass}>
                                    <span className={this.props.commentObject.userType}>
                                        {this.props.commentObject.comment}
                                    </span>
                    </div>
                    <h5 className={messageClass}>
                        -{this.props.commentObject.user.name}
                    </h5>
                </div>
            </div>
        )
    }
}

export default Comment;