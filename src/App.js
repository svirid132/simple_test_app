import './App.css';
import SelectWords from './SelectWord/SelectWord.js'
import dataForSelectWord from "./SelectWord/data.json";
import TaskBorder from "./TaskBorder/TaskBorder.js"
import React, {Component} from 'react';

const styleWord = {
  'us': 'unselect',
  's': 'select',
  'p': 'plus',
  'm': 'minus',
  'sol': 'solution' 
}

class Word extends Component {

  constructor(props) {
      super(props);
  }

  render() {

      let raiting = null;
      if  (this.props.raiting) {
          raiting =  
              <span className={ this.props.raiting > 0 ? 
                "raiting plus" : 
                "rainting minus" }> {this.props.raiting}
              </span>
      }

      return (
          <li className={ "word " + styleWord[this.props.style] }>
            {this.props.value}
            { raiting }
          </li>
      );
  }
}

function App() {
  return (
      // <TaskBorder >
      //   <SelectWords data = {dataForSelectWord}/>
      // </TaskBorder>

    <Word value="text" raiting={1} style='sol'/>

    // <div className = 'root'>
    //   <header>
    //     <h1>
    //       Test<span>English</span>
    //     </h1>
    //   </header>
    //   <SelectWords data = {dataForSelectWord}/>
    // </div>
  );
}

export default App;
