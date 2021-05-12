import './App.css';
import {LineWords } from './SelectWord/SelectWord.js'
import StarSlider from './StarSlider/StarSlider.js'
import data from "./SelectWord/data.json";
import React, {Component} from 'react';

function createRightWordIndexs(words, rightWords) {
  const rightWordIndexs = new Array;
  for (let i = 0; i < rightWords.length; ++i) {
    const findingIndex = words.indexOf(rightWords[i]);
    if (findingIndex !== -1) rightWordIndexs.push(findingIndex);
  }

  return rightWordIndexs;
}

function calcTestScore(selectLinesIndexs, rightLinesIndexs) {
  let score=0;
  let maxScore = 0;
  for (let i = 0; i < selectLinesIndexs.length; ++i) {
    const selectWordIndexs = selectLinesIndexs[i];
    selectWordIndexs.forEach((isSelect, index) => {
      if (isSelect) {
        rightLinesIndexs[i].indexOf(index) === -1 ? --score : ++score; 
      }
    });
    maxScore += rightLinesIndexs[i].length;
  } 
  return [Math.max(score, 0), maxScore];
}

const mode = {
  'd': 'default',
  'c': 'check',
  's': 'solution'
}

class SelectWords extends Component {

  rightItemsIndexs;

  constructor(props) {
      super(props);

      this.rightItemsIndexs = new Array(this.props.data.lines.length);
      this.props.data.lines.forEach((line, index) => {
        this.rightItemsIndexs[index] = createRightWordIndexs(line.words, line.right);
      });

      const state = this.getDefaultState();
      state['mode'] = 'd';
      state['stars'] = 0;
      state['numberOfStars'] = 0 
      console.log(state);
      this.state = state;// 0: [words], 1: [words]

      this.handleClick = this.handleClick.bind(this);
      this.handleClickBtn = this.handleClickBtn.bind(this);
  }

  handleClick(lineIndex, wordIndex) {
    const selectItemIndexs = this.state[lineIndex].slice();
    selectItemIndexs[wordIndex] = !selectItemIndexs[wordIndex];
    const line = new Object();
    line[lineIndex] = selectItemIndexs;
    this.setState(line);
  }

  handleClickBtn(e) {
    switch(e.target.name) {
      case 'check':
        const selectItemsIndexs = new Array(this.props.data.lines.length); 
        for (let i = 0; i < selectItemsIndexs.length; ++i) {
            selectItemsIndexs[i] = this.state[i];
        }
        const [score, maxScore] = calcTestScore(selectItemsIndexs, this.rightItemsIndexs);
        this.setState({
          mode: 'c',
          stars: score,
          numberOfStars: maxScore
          });
          break;
      case 'solution':
          this.setState({mode: 's'});
          break;
      case 'reset':
        const state = this.getDefaultState();
        state['mode'] = 'd';
        this.setState(state);
        break;
    }
  }

  getDefaultState() {
    const selectItemsIndexs = new Array(this.props.data.lines.length);
    this.props.data.lines.forEach((line, index) => {
      const selectIndexs = new Array(line.words.length).fill(false);
      selectItemsIndexs[index] = [index, selectIndexs];
    });
    return Object.fromEntries(selectItemsIndexs);
  }

  getBtns(mode) {
    console.log('this ' + mode);
    switch(mode) {
      case 'd':
        return <button name='check' onClick={this.handleClickBtn}>check</button>
      case 'c':
        return (
        <ul>
          <li key={0}><button name='reset' onClick={this.handleClickBtn}>reset</button></li>
          <li key={1}><button name='solution' onClick={this.handleClickBtn}>solution</button></li>
        </ul>);
      case 's':
        return <button name='reset' onClick={this.handleClickBtn}>reset</button>
      default:
        return <p>not button</p>
    }
  }

  render() {

    console.log('line - this.state[0]: ' + this.state[0]);

    let mode;
    switch(this.state.mode) {
      case 'd':
        mode = 'd';
        break;
      case 'c':
        mode = 'r';
        break;
      case 's':
        mode = 's';
        break;
    }

    const linesWords = this.props.data.lines.map((line, index) => {
      return <LineWords key={index}
        simpleWords={line.words} 
        rightWordIndexs={this.rightItemsIndexs[index]} 
        modeLineWords={mode} 
        selectIndexs = {this.state[index]}
        onClick={(wordIndex) => this.handleClick(index, wordIndex)}
     />
    });

    const btns = this.getBtns(this.state.mode);

    return (
      <div>
        {linesWords}
        {btns}
        {this.state.mode !== 'd' ? <StarSlider fillStar = {this.state.stars} countStar = {this.state.numberOfStars}/> : null}
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
