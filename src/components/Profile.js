import React from 'react';
import UserService from "../services/UserService";

class Profile extends React.Component {
    constructor(props) {
        console.log("cons");
        super(props);
        this.state = {
            profile: {
                name: '',
                email: '',
                created: '',
                imageUrl: 'https://i.ndtvimg.com/i/2018-03/sachin-tendulkar-facebook_806x605_41522254726.jpg',
                linkedinUrl: '',
                githubUrl: '',
                loggedIn: false,
            },
            userId: this.props.userId
            //userId: 162
        }
        this.updateProfile = this.updateProfile.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.linkedinChanged = this.linkedinChanged.bind(this);
        this.githubChanged = this.githubChanged.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
        this.emptyState = this.emptyState.bind(this);
        this.renderEmail = this.renderEmail.bind(this);
        this.loggedInProfile = this.loggedInProfile.bind(this);
        this.anonymousProfile = this.anonymousProfile.bind(this);
        this.userService = UserService.instance;
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        this.setState({userId: newProps.userId})
    }

    componentDidMount() {
        console.log("profileMounted");
        const profileUrl = "http://nucode-java.herokuapp.com/api/user/" + this.state.userId;
        const viewerUrl = "http://nucode-java.herokuapp.com/api/user"

        fetch(viewerUrl)
            .then(response => response.json())
            .then(viewer => {
                fetch(profileUrl).then(response => (response.json()))
                    .then(profile => {
                        console.log(profile);
                        console.log(viewer);
                        if (viewer.id === this.state.userId) {
                            profile.loggedIn = true;
                            this.setState({
                                profile: profile
                            })
                        }
                        else {
                            profile.loggedIn = false;
                            this.setState({
                                profile: profile
                            })
                        }
                    });
            });
        console.log("profileLoadSuccessful!")
        console.log(this.state);
    }

    emptyState() {
        // this.setState({
        //     profile: {
        //         name: '',
        //         created: '',
        //         imageUrl: '',
        //         email: this.state.profile.email,
        //         linkedinUrl: '',
        //         githubUrl: '',
        //         loggedIn: false
        //     },
        //     userId: 162
        // })
    }

    usernameChanged(event) {
        var state = this.state;
        state.userId = this.state.userId;
        var profile = this.state.profile;
        profile.name = event.target.value;
        state.profile = profile;
        this.setState(state);
    }

    emailChanged(event) {
        var state = this.state;
        state.userId = this.state.userId;
        var profile = this.state.profile;
        profile.email = event.target.value;
        state.profile = profile;
        this.setState(state);
    }

    linkedinChanged(event) {
        var state = this.state;
        state.userId = this.state.userId;
        var profile = this.state.profile;
        profile.linkedinUrl = event.target.value;
        state.profile = profile;
        this.setState(state);
    }

    githubChanged(event) {
        var state = this.state;
        state.userId = this.state.userId;
        var profile = this.state.profile;
        profile.githubUrl = event.target.value;
        state.profile = profile;
        this.setState(state);
    }

    updateProfile() {
        this.userService.updateProfile(this.state.profile, this.emptyState)
    }

    renderEmail() {
        return (
            <div className="input-group-prepend">
                <span className="input-group-text" id="">Email</span>
                <input onChange={this.emailChanged} type="text" disabled={true}
                       className="form-control" placeholder={this.state.profile.email}/>
            </div>
        )
    }

    loggedInProfile() {
        return (
            <div className="row">
                <div className="col-8">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Name</span>
                        <input onChange={this.usernameChanged} type="text"
                               className="form-control" placeholder={this.state.profile.name}
                        />
                    </div>
                    {this.state.profile.loggedIn && this.renderEmail()}
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Linkedin URL</span>
                        <input onChange={this.linkedinChanged} type="text"
                               className="form-control" placeholder={this.state.profile.linkedinUrl}/>
                    </div>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Github URL</span>
                        <input onChange={this.githubChanged} type="text"
                               className="form-control" placeholder={this.state.profile.githubUrl}/>
                    </div>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">User Since</span>
                        <input type="text" disabled={true}
                               className="form-control" placeholder={this.state.profile.created}/>
                    </div>
                    <button className="btn btn-primary" onClick={this.updateProfile}>Update</button>
                </div>
                <div className="col-4">
                    <img id="image-preview"
                         src={this.state.profile.imageUrl}
                         style={{width: 200, height: 240}}
                         alt="image not found"/>
                </div>
            </div>
        )
    }

    anonymousProfile() {
        console.log(this.state.profile.imageUrl);
        return (
            <div className="row">
                <div className="col-8">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Name</span>
                        {this.state.profile.name}
                    </div>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Linkedin URL</span>
                        {this.state.profile.linkedinUrl}
                    </div>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Github URL</span>
                        {this.state.profile.githubUrl}
                    </div>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">User Since</span>
                        {this.state.profile.created}
                    </div>
                </div>
                <div className="col-4">
                    <img id="image-preview"
                         src={this.state.profile.imageUrl}
                         style={{width: 200, height: 240}}
                         alt="image not founded"/>
                </div>
            </div>
        )
    }

    render() {
        console.log("renderingProfile");
        console.log(this.state)
        return (
            <div>
                {this.state.profile.loggedIn && this.loggedInProfile()}
                {!this.state.profile.loggedIn && this.anonymousProfile()}
            </div>
        )
    }
}

export default Profile;
