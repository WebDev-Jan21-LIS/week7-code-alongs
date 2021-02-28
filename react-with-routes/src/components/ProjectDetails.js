import React from 'react';
import myProjects from '../myProjects.json';

class ProjectDetails extends React.Component {
    state = {
        name: '',
        technologies: '',
        year: '',
        description: ''
    }

    componentDidMount() {
        const projectId = this.props.match.params.id;   
        console.log('projectId ', projectId);
        const foundProject = myProjects.find((project) => {
            return project.id === projectId;
        });

        //Everytime we do setState a re-render occurs
        this.setState({
            name: foundProject.name,
            technologies: foundProject.technologies,
            year: foundProject.year,
            description: foundProject.description
        })
    }

    render() {
        const { name, technologies, year, description } = this.state
        return (
            <div>
                <h3>Project : {name}</h3>
                <p>Description: {description}</p>
                <p>Year: {year}</p>
                <p>Technologies: {technologies}</p>
            </div>
        )
    }
}

export default ProjectDetails;