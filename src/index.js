import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';
import MyProjects from "./components/MyProjects";
import UserAdmin from "./containers/UserAdmin";

ReactDOM.render(
    <div className="container-fluid">
        {/*<MyProjects/>*/}
        {/*<Profile userId={162}/>*/}
        <UserAdmin/>
    </div>,
    document.getElementById('root')
);
