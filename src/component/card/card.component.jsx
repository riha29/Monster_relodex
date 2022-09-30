import { Component } from 'react';
import CardList from '../card-list/card-list.component';
import './card.style.css'

class Card extends Component {
    render () {
        const {id, name, email} = this.props.monster
        return (
            <div className='card-container' key= {id}>
                <img alt={`monster ${name}`} src= {`https://robohash.org/ ${id}?set=set2`} />
                <h2> {name} </h2>
                <p>{email} </p>
            </div>
        )
    }
}

export default Card