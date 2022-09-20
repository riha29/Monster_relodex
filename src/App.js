import {Component} from 'react'

import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      monster: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monster: users}
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
const { monster, searchField}= this.state
const {onSearchChange}= this 

    const filteredMonster= monster.filter((monsters)=> {
      return monsters.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className= 'App'>
        <SearchBox onChangeHandler= { onSearchChange } placeholder= 'search monsters' className= 'monster-search-box' />
        <CardList monster= {filteredMonster} />
    </div>
    )
  }
}

export default App;