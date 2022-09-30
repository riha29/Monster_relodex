import {Component} from 'react'

import Card from '../card/card.component'
import './card-list.style.css'

class CardList extends Component {
    
    render () {

        const {monster} = this.props

        return (
            <div className='card-list' key={monster.id}>
                {/* <img alt= {`monster ${name}`} src= {`https://robobash.org/${id}?set=set2&size=180x180`} />
                <h2>
                    {name}
                </h2>
                <p>
                    {email}
                </p> */}
                {monster.map((monster) => {
                    return (
                        <Card monster = {monster} />
                    )})}
            </div>
        )
    }
}

export default CardList