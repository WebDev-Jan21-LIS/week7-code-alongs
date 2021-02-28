import React from 'react';
import myProjects from '../myProjects.json';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Projects extends React.Component {
    state = {
        projects: [],
        countries: []
    }

    componentDidMount() {
        console.log('DID MOUNT');
        //Get projects from the API
        axios.get('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                //Set state
                this.setState({
                    countries: response.data
                });
                console.log('axios response', response.data);
            });

      //  setTimeout(() => {
        this.setState({
            projects: myProjects
        })
    //    }, 3000)
    }

    render() {
        console.log('RENDER');
        const { projects } = this.state;
        return projects.length > 0
        ? (
            <div>
                <h2>Projects</h2>
                {projects.map((project) => {
                    return (
                        <div key={project.id}>
                            <Link to={`/projects/${project.id}`}>{project.name}</Link>
                        </div>
                    )
                    
                })}
            </div>
        ) : 
        <div>Loading...</div>
    }
}

export default Projects