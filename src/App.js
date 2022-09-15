import {component} from 'react'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructot() {
    super(); 

    this.state = {
      name: { firstName: 'Faozia', lastName: 'Islam'}
      company: 'omega',
    };
  }

  render() {
    return <div className= 'App'></div>
  }
}



export default App;
