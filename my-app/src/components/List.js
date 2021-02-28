import React from 'react';
import Card from './Card';
import AddMovie from './AddMovie';

class List extends React.Component {
    state =  {
        numbers: [1, 2, 3, 4, 5, 6],
        movies: [
            { id: "AMLsriUkE", title: "Jurassic Park", director: "Steven Spielberg", hasOscar: true },
            { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante",  hasOscar: false },
            { id: "z2uykusRE", title: "Titanic", director: "James Cameron", hasOscar: true }
          ],
        showOscarAwarded: true
    }


    toggleOscarAwarded = () => {
        this.setState((state) => {
            return {
                showOscarAwarded: !state.showOscarAwarded
            }
        })
    }

    deleteMovieHandler = (id) => {
        this.setState((state) => {
            return {
                //Never mutate the state directly
                //Filter returns a new Array
                movies: state.movies.filter(movie => movie.id !== id)
            }
        });
    }

    _addMovieHandler = () => {
        const newMovie = {
            id: '123',
            title: 'Pulp Fiction',
            director: 'Quentin Tarantino',
            hasOscar: true 
        }

        this.setState((state) => {
            return {
                //Never mutate the state directly
                //concat returns a new array
                movies: state.movies.concat(newMovie)
            }
        })
    }

    addMovieHandler = (theMovieThatComesFromAddMovie) => {
        this.setState((state) => ({
            movies: state.movies.concat(theMovieThatComesFromAddMovie)
        }))
    }

    render() {
        const { numbers, movies, showOscarAwarded } = this.state;
        const filteredMovies = movies.filter((movie) => {
            return movie.hasOscar === showOscarAwarded
        });

        return (
            <>
                {/* {numbers.map((number) => {
                    return <li key={number}>{number}</li>
                })} */}
                {filteredMovies.map((movie)=> {
                    return <Card 
                        key={movie.id} 
                        {...movie}
                        deleteMovie={() => this.deleteMovieHandler(movie.id)}
                      // deleteMovie={this.deleteMovieHandler}
                     //  deleteMovie={this.deleteMovieHandler(movie.id)}
                    />
                })}
                <button onClick={this.addMovieHandler}>Add Movie</button>
                <button onClick={this.toggleOscarAwarded}>
                    {
                        showOscarAwarded
                        ? "Hide Oscar Awarded"
                        : "Show Oscar Awarded"
                    }
                </button>
                <AddMovie addTheMovie={this.addMovieHandler} />
            </>
        )
    }
}

export default List;