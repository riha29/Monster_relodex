import {Component} from 'react'

class CardList extends Component {
    
    render () {
        console.log('render from cardlist')
        const {monster}= this.props
        return (
            <div className='card-list'>
                {monster.map(monster => (
                    <h1 key= {monster.id}>
                        {monster.name}
                    </h1>
                ))}
            </div>
        )
    }
}


export default CardList