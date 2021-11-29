import React, { Component } from 'react';
import './styles.css'

class MovieList extends Component{
    render() {
        const { data } = this.props
        return (
            <ol>
                {data.map((employee, index) => {
                    return index === this.props.index
                        ? employee.favoriteMovies.map((movie, index) => {
                            return <li key={index}>{movie}</li>
                        })
                        : ''
                })}
            </ol>
        )
    }
}

export default MovieList