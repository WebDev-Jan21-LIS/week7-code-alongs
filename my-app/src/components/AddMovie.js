import React from 'react';

class AddMovie extends React.Component {
    state = {
        title: '',
        director: '',
        hasOscar: false,
        imdbRating: ''
    }

    handleChange = (event) => {
        let { name, value, type } = event.target;

        if (type === 'checkbox') {
            value = event.target.checked;
        }

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addTheMovie(this.state);

        this.setState({
            title: '',
            director: '',
            hasOscar: false,
            imdbRating: ''
        })
    }

    render() {
        const { title, director, hasOscar, imdbRating} = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                {/* Un -Controlled components */}
                <label>Title</label>
                <input type="text" name="title" onChange={this.handleChange} value={title}/>

                <label>Director</label>
                <input type="text" name="director" onChange={this.handleChange} value={director}/>

                <label>Oscar Awarded</label>
                <input type="checkbox" name="hasOscar" onChange={this.handleChange} checked={hasOscar}/>

                <label>IMDB Rating</label>
                <input type="number" name="imdbRating" onChange={this.handleChange} value={imdbRating}/>

                <button type="submit">Create</button>
            </form>
        )
    }
}

export default AddMovie;