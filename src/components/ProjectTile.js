import React from 'react';


export default class ProjectTile
    extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="card text-black  mb-3" >
                <div className="card-header">{this.props.project.title}</div>
                <div className="card-body">
                    <p className="card-text">{this.props.project.summary}</p>
                    <ul>
                        {this.props.project.languages.split(" ").map(language => (<li> {language}</li>) )}
                    </ul>
                </div>
            </div>
        );
    }
}