import React, { Component } from 'react';
import './styles.css'

class CardNav extends Component {
    render() {
        return (
            <div className='cardContainer'>
                <div className='buttons'>
                    <button onClick={this.props.lastButton} className='prevBtn'>
                        &lt; Previous
                    </button>
                    <div className='middleContainer'>
                        <button className='middleBtn'>Edit</button>
                        <button className='middleBtn'>Delete</button>
                        <button className='middleBtn'>New</button>
                    </div>
                    <button onClick={this.props.nextButton} className='nextBtn'>
                        Next &gt;
                    </button>
                </div>
            </div>
        )
    }
}

export default CardNav;