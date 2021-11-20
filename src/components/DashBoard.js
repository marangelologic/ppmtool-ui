import React, { Component } from 'react'
import ProjectItem from './project/ProjectItem';


class DashBoard extends Component {
    render() {
        return (
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Award Interpreter</h1>
                        <br />
                        <a href="ProjectForm.html" className="btn btn-lg btn-info">
                            Create a new Award
                        </a>
                        <br />
                        <hr />
                    <ProjectItem />
    
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default DashBoard;