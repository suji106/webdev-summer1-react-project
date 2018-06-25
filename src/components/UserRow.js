import React from 'react';
import UserService from "../services/UserService";

class UserAdmin extends React.Component {
    constructor(props) {
        console.log("cons");
        super(props);
        this.state = {
            user: {
                name: '',
                email: ''
            },
        }
        this.userService = UserService.instance;
        this.deleteUser = this.deleteUser.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
    }

    deleteUser() {
        this.userService.deleteUser(this.props.user.id, this.props.callback)
    }

    updateProfile() {
        this.userService.updateProfile(this.state.user, this.componentDidMount)
    }

    render() {
        return (
            <tr className="table-row">
                <td className="wbdv-username">
                    {this.props.user.name}
                </td>
                <td>
                    {this.props.user.email}
                </td>
                <i id="wbdv-remove"
                   onClick={this.deleteUser}
                   className="fa-2x fa fa-times wbdv-remove"
                >
                </i>
                <i id="wbdv-edit"
                   onClick={this.updateProfile}
                   className="fa-2x fa fa-pencil wbdv-edit"
                >
                </i>
            </tr>
        )
    }
}

export default UserAdmin;