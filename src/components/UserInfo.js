import React, { Component } from 'react';
import CardNav from '../components/CardNav';
import MovieList from '../components/MovieList'
import data from '/Users/phaze/Desktop/Devmountain/specializations/week-11/user-directory/user-directory/src/data';
import './styles.css'

class UserInfo extends Component{
    constructor(props) {
        super(props)

        this.state = {
            data: data,
            employeeTotal: 25,
            index: 0
        }
    }

    nextButton = () => {
        const newIndex = this.state.index + 1
        newIndex === this.state.employeeTotal
            ? alert('There are no more employees')
            : this.setState({...this.state, index: newIndex })
    }

    lastButton = () => {
        const newIndex = this.state.index - 1
        newIndex === -1
            ? alert('There are no previous employees')
            : this.setState({ ...this.state, index: newIndex })
    }


    render() {
        const { data, employeeTotal } = this.state
        return (
            <div className='mainCard'>
                <div className='card'>
                    {data.map((employee, index) => {
                        return index === this.state.index ? (
                            <div className='info'>
                                <div className='cardCounter'>
                                    <span className='counter'>
                                        {employee.id}/{employeeTotal}
                                    </span>
                                </div>
                                <h1 className='name'>
                                    {employee.name.first} {employee.name.last}
                                </h1>
                                <div className='infoCard'>
                                    <span className='location'><strong>From:</strong> {employee.city}, {employee.country}</span><br />
                                    <span className='jobTitle'><strong>Job Title:</strong> {employee.title}</span><br />
                                    <span className='employer'><strong>Employer:</strong> {employee.employer}</span><br />
                                </div>
                                <div className='movieList'>
                                    <strong>Favorite Movies:</strong>
                                    <MovieList data={data} index={index} />
                                </div>
                            </div>
                        ) : (
                            ""
                        )
                    })}
                    
                </div>
                <CardNav lastButton={this.lastButton} nextButton={this.nextButton}/>
            </div>
        )
    }
}

export default UserInfo;
