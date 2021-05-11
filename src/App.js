import './App.css';
import {LineWords } from './SelectWord/SelectWord.js'
import data from "./SelectWord/data.json";
import React, {Component} from 'react';

function createRightWordIndexs(words, rightWords) {
  const rightWordIndexs = new Array;
  for (let i = 0; i < words.length; ++i) {
    const findingIndex = rightWords.indexOf(words[i]);
    if (findingIndex !== -1) rightWordIndexs.push(findingIndex);
  }

  return rightWordIndexs;
}

class SelectWords extends Component {

  rightItemsIndexs;

  constructor(props) {
      super(props);

      this.rightItemsIndexs = new Array(this.props.data.lines.length);

      const selectItemsIndexs = new Array(this.props.data.lines.length);
      this.props.data.lines.forEach((line, index) => {
        this.rightItemsIndexs[index] = createRightWordIndexs(line.words, line.right);
        const selectIndexs = new Array(line.words.length).fill(false);
        selectItemsIndexs[index] = selectIndexs;
      });
      this.state = {selectItemsIndexs: selectItemsIndexs};

      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(lineIndex, wordIndex) {
    const selectItemsIndexs = this.state.selectItemsIndexs.slice();
    selectItemsIndexs[lineIndex][wordIndex] = !selectItemsIndexs[lineIndex][wordIndex];
    this.setState({selectItemsIndexs: selectItemsIndexs});
  }

  render() {

console.log('this.state.selectItemsIndexs: ' + this.state.selectItemsIndexs[0]);

    const LinesWords = this.props.data.lines.map((line,index) => {
      return <LineWords key={index}
        simpleWords={line.words} 
        rightWordIndexs={this.rightItemsIndexs} 
        modeLineWords={'d'} 
        selectIndexs = {this.state.selectItemsIndexs[index]}
        onClick={(wordIndex) => this.handleClick(index, wordIndex)}
     />
    });

    return (
      <div>
        {LinesWords}
      </div>
    );
  }
}

function App() {
  return (
      // <TaskBorder >
      //   <SelectWords data = {dataForSelectWord}/>
      // </TaskBorder>

    

      <SelectWords data={data} />

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
