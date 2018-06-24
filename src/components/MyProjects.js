import React from 'react';
import MyProjectsService from "../services/MyProjectsService";
import ProjectTile from "./ProjectTile";
import CommentsList from "../containers/CommentsList";

class MyProjects extends React.Component {
    constructor(props) {
        console.log("cons");
        super(props);
        this.state = {
            accepted: [],
            pending: [],
            rejected: [],
            projects: [],
            userId: 22
        }
        this.myProjectsService = MyProjectsService.instance;
        // this.renderProjects = this.renderProjects.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({userId: newProps.params.userId})
    }

    componentDidMount() {
        console.log("mountedMyProjects");
        fetch("http://nucode-java.herokuapp.com/api/requests/accepted"
            .replace('UID', this.state.userId))
            .then(response => (response.json())
            )

            .then(projects => this.setState({
                accepted: projects
            }));

        fetch("http://nucode-java.herokuapp.com/api/requests/pending"
            .replace('UID', this.state.userId))
            .then(response => (response.json())
            )
            .then(projects => this.setState({
                pending: projects
            }));
        fetch("http://nucode-java.herokuapp.com/api/requests/rejected"
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
                <CommentsList projectId='222'/>
            </div>
        )
    }
}

export default MyProjects;