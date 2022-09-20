import {Component} from 'react'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    console.log('constructor')
    super(); 

    this.state = {
      monster: [],
      searchField: ''
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monster: users}
    },
    () => {
      console.log(this.state)
    }
    ))
  }

  onSearchChange= (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    
    
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log('render')
const { monster, searchField}= this.state
const {onSearchChange}= this 

    const filteredMonster= monster.filter((monsters)=> {
      return monsters.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className= 'App'>
        <input
        className='search-box'
        type='search'
        placeholder='search monsters'
        onChange={onSearchChange}
        />
        {
          filteredMonster.map((monster) => {
          return <div key={monster.id}>
            <h1>
              {monster.name}
            </h1>
          </div>
          }
         )
        }
    </div>
    )
  }
}

export default App;