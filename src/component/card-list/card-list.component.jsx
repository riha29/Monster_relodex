import Card from '../card/card.component';
import './card-list.style.css';

const CardList = ({ monster }) => (
  <div className='card-list'>
    {monster.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;