import {Component} from 'react'

import './card-list.styles.css'

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
                    const {name, email, id}= monster 
                    return (
                        <div className='card-container' key= {id}>
                            <img alt={`monster ${name}`} src= {`https://robohash.org/ ${id}?set=set2`} />
                            <h2> {name} </h2>
                            <p>{email} </p>
                    </div>
                    )})}
            </div>
        )
    }
}

export default CardList