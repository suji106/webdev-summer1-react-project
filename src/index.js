import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';
import MyProjects from "./components/MyProjects";
import CommentsList from "./containers/CommentsList";

ReactDOM.render(
    <div className="container-fluid">
        <CommentsList/>
    </div>,
    document.getElementById('root')
);
