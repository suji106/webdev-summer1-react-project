import React from 'react';
import UserService from "../services/UserService";
import UserRow from "../components/UserRow";

class UserAdmin extends React.Component {
    constructor(props) {
        console.log("cons");
        super(props);
        this.state = {
            users: [],
            user: {
                email: '',
                name: ''
            }
        }
        this.userService = UserService.instance;
        this.createUser = this.createUser.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        console.log("mountedUserAdmin");
        fetch("http://nucode-java.herokuapp.com/api/users")
            .then(response => (response.json())
            )
            .then(users => this.setState({
                users: users
            }));
        console.log("mountSuccessful!")
        console.log(this.state);
    }

    createUser() {
        this.userService.createUser(this.state.user, this.componentDidMount);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1 id="adminTitle">Admin Page</h1>
                <table className="table">
                    <tr className="table-row">
                        <td>
                            <input onChange={event => {
                                    this.setState({
                                        user: {
                                            name: event.target.value,
                                            email: this.state.user.email
                                        }
                                    })
                                }}/>
                        </td>
                        <td>
                            <input onChange={event => {
                                    this.setState({
                                        user: {
                                            name: this.state.user.name,
                                            email: event.target.value
                                        }
                                    })
                                }}/>
                        </td>
                        <td>
                            <i id="createUser"
                               onClick={this.createUser}
                               className="fa-2x fa fa-plus wbdv-create">
                            </i>
                            <i id="updateUser"
                               className="fa-2x fa fa-check wbdv-update">
                            </i>
                        </td>
                    </tr>
                    {this.state.users.map(user => (
                            <UserRow user={user} callback={this.componentDidMount}/>
                        )
                    )}
                </table>


                {/*<table className="table">*/}
                {/*<thead>*/}
                {/*<tr id="tableHeader">*/}
                {/*<th>Username</th>*/}
                {/*<th>Password</th>*/}
                {/*<th>First Name</th>*/}
                {/*<th>Last Name</th>*/}
                {/*<th>Role</th>*/}
                {/*<th>&nbsp;</th>*/}
                {/*</tr>*/}
                {/*<tr className="wbdv-form">*/}
                {/*<td><input id="usernameFld" className="form-control"*/}
                {/*placeholder="Username"/></td>*/}
                {/*<td><input id="passwordFld" className="form-control" type="password"*/}
                {/*placeholder="Password"/></td>*/}
                {/*<td><input id="firstNameFld" className="form-control"*/}
                {/*placeholder="First Name"/></td>*/}
                {/*<td>*/}
                {/*<input id="lastNameFld" className="form-control"*/}
                {/*placeholder="Last Name"/>*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*<select id="roleFld" className="form-control">*/}
                {/*<option value="STUDENT">Student</option>*/}
                {/*<option value="FACULTY">Faculty</option>*/}
                {/*</select>*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*<span className="float-right" style="white-space: nowrap">*/}
                {/*<i id="searchUser" className="fa-2x fa fa-search wbdv-search">*/}
                {/*</i>*/}
                {/*<i id="createUser" className="fa-2x fa fa-plus wbdv-create">*/}

                {/*</i>*/}
                {/*<i id="updateUser" className="fa-2x fa fa-check wbdv-update">*/}
                {/*</i>*/}
                {/*</span>*/}
                {/*</td>*/}
                {/*</tr>*/}
                {/*</thead>*/}
                {/*<tbody className="wbdv-tbody">*/}
                {/*<tr className="table-row">*/}
                {/*<td className="wbdv-username">*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*&nbsp;*/}
                {/*</td>*/}
                {/*<td className="wbdv-first-name">*/}
                {/*</td>*/}
                {/*<td className="wbdv-last-name">*/}
                {/*</td>*/}
                {/*<td className="wbdv-role">*/}
                {/*</td>*/}
                {/*<td className="wbdv-actions">*/}
                {/*<span className="float-right">*/}
                {/*<i id="wbdv-remove" className="fa-2x fa fa-times wbdv-remove" type="button">*/}
                {/*</i>*/}
                {/*<i id="wbdv-edit" className="fa-2x fa fa-pencil wbdv-edit" type="button">*/}
                {/*</i>*/}
                {/*</span>*/}
                {/*</td>*/}
                {/*</tr>*/}
                {/*</tbody>*/}
                {/*</table>*/}
            </div>
        )
    }
}

export default UserAdmin;