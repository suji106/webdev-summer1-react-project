import React from 'react';
import CommentService from "../services/CommentService";
import ProjectTile from "./ProjectTile";

class MyProjects extends React.Component {
    constructor(props) {
        console.log("cons");
        super(props);
        this.state = {
            comment: 'i am empty',
            created: '',
            projectId: 12,
            userId: 22
        }
        this.commentService = CommentService.instance;
        // this.renderProjects = this.renderProjects.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({userId: newProps.params.userId})
    }

    componentDidMount() {
        console.log("commentMounted");
        var commentUrl = "http://nucode-java.herokuapp.com/api/UID/PID/comments"
            .replace('UID', this.state.userId).replace('PID',this.state.projectId);
        fetch(commentUrl).then(response => (response.json()))
            .then(comments => this.setState({
                accepted: projects
            }));


        fetch("http://nucode-java.herokuapp.com/api/UID/requests/pending"
            .replace('UID', this.state.userId))
            .then(response => (response.json())
            )
            .then(projects => this.setState({
                pending: projects
            }));
        fetch("http://nucode-java.herokuapp.com/api/UID/requests/rejected"
            .replace('UID', this.state.userId))
            .then(response => (response.json())
            )
            .then(projects => this.setState({
                rejected: projects
            }));

        fetch("http://nucode-java.herokuapp.com/api/UID/requests/accepted"
            .replace('UID', this.state.userId))
            .then(response => (response.json())
            )
            .then(projects => this.setState({
                projects: projects
            }));

        console.log("mountSuccessful!")
        console.log(this.state);
    }

    updateState(toThis) {
        this.setState(toThis);
    }

    // renderProjects(stater) {
    //     console.log("renderProjects")
    //     console.log(this.state)
    //
    //     return (
    //         stater.map((project, index) => {
    //                 console.log(project);
    //                 return (
    //                 <div className="card text-black  mb-3">
    //                     <div className="card-header">{project.title}</div>
    //                     <div className="card-body">
    //                         <p className="card-text">{project.summary}</p>
    //                         <ul>
    //                             {project.languages.split(" ").map(language => (<li> {language}</li>))}
    //                         </ul>
    //                     </div>
    //                 </div>
    //             )
    //             }
    //         )
    //     )
    // }


    render() {
        console.log("renderingProjectsForUser");

        return (
            <div>
                <h1>
                    Accepted Projects
                </h1>
                <div className="card-deck">
                    {this.state.accepted.map(project => (<ProjectTile project={project}/>))}
                </div>
                <h1>
                    Pending Projects
                </h1>
                <div className="card-deck">
                    {this.state.pending.map(project => (<ProjectTile project={project}/>))}
                </div>
                <h1>
                    Rejected Projects
                </h1>
                <div className="card-deck">
                    {this.state.rejected.map(project => (<ProjectTile project={project}/>))}
                </div>
            </div>
        )
    }
}

export default MyProjects;