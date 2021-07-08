import React, {Component} from 'react';
import  '../Styles/Word.css';
import update from 'immutability-helper';
import { mode } from '../mode';
import { CSSTransition } from 'react-transition-group';
import {wordMode} from './wordMode'
  
class Word extends Component {
  
    render() {
  
      let styleClass = 'word';
      let raiting = null;
      switch(this.props.mode) {
        case wordMode.unselect: 
          styleClass += ' ' + 'unselect';
          break;
        case wordMode.select: 
          styleClass += ' ' + 'select';
          break;
        case wordMode.plus: 
          styleClass += ' ' + 'plus';
          break;
        case wordMode.minus: 
          styleClass += ' ' + 'minus';
          raiting = <span className='minus'>-1</span>;
          break;
        case wordMode.solution: 
          styleClass += ' ' + 'solution';
          break;
      }

        return (
            <li className={ styleClass } data-type = 'selectWord' onClick={this.props.onClick}>
              {this.props.value}
              <CSSTransition in={this.props.mode === wordMode.plus} unmountOnExit timeout={this.props.id * 200} classNames='raiting'>
                <span className='plus'>{'+1'}</span>
              </CSSTransition>
              <CSSTransition in={this.props.mode === wordMode.minus} unmountOnExit timeout={this.props.id * 200} classNames='raiting'>
                <span className='minus'>{'-1'}</span>
              </CSSTransition>
            </li>
        );
    }
}

  export default class SelectWord extends Component{
    constructor(props) {
      super(props);
  
      this.selectStar = 0;
  
      this.allStar = this.props.data.reduce((accumulator, line) => line.right.length + accumulator, 0);
      this.handleStar = this.handleStar.bind(this);
    }
  
    handleStar(raiting) {
      this.selectStar += raiting;
      let stars = this.selectStar;
      if (this.selectStar < 0) stars = 0;
      console.log(stars, this.allStar);
      if(this.props.mode === mode.default) this.props.onStar([stars, this.allStar]);
    }
  
    componentDidMount() {
      this.props.onStar([0, this.allStar]);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.mode !== this.props.mode && this.props.mode === mode.default) {
        this.selectStar = 0;
        this.props.onStar([this.selectStar, this.allStar]);
      }
    }
  
    render() {
  
      const linesWords = this.props.data.map((line, index) => {
        return <LineWords key={index}
        words={line.words} 
        right={line.right}
        mode={this.props.mode}
        onClick={this.handleStar}
        />
      });
  
      return linesWords;
    }
  }

  export class LineWords extends React.Component {
      
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {selectIds: new Array(this.props.words.length).fill(false)};
      this.rightIds = new Array(this.props.words.length).fill(false).map((boolId, index) => {
        return this.props.right.findIndex((word) => word === this.props.words[index]) !== -1;
      });;
    }
  
    handleClick(index) {

        if (this.props.mode !== mode.default) return;

        let isSelectId = this.state.selectIds[index];
        if ( isSelectId ) { 
          this.setState(update(this.state, {selectIds: {$splice: [[index, 1, false]] }}));
          this.props.onClick(this.rightIds[index] ? -1: +1);
        } else {
          this.setState(update(this.state, {selectIds: {$splice: [[index, 1, true]]}}));
          this.props.onClick(this.rightIds[index] ? +1: -1);
        }
    }
  
    componentDidUpdate(prevProps) {
      if (prevProps.mode !== this.props.mode && this.props.mode === mode.default) {
        this.setState(Object.assign({}, this.state).selectIds.fill(false));
      }
    }

    render() {
      const words = this.props.words.map((word, index) => {

        let _wordMode;
        if (this.props.mode === mode.default) {
          _wordMode = this.state.selectIds[index] ? wordMode.select : wordMode.unselect;
        } else if (this.props.mode === mode.solution) {
          _wordMode = this.rightIds[index] ? wordMode.solution : wordMode.unselect;
        } else if (this.props.mode === mode.check) {
          _wordMode = this.state.selectIds[index] ? 
            (this.rightIds[index] ? wordMode.plus : wordMode.minus) : 
            wordMode.unselect;
        }
        
        return (
            <Word key ={index} 
            id = {index}
            value={word} 
            mode={_wordMode} 
            onClick={() => this.handleClick(index)} />
        );
      });

      return (
        <ul className="lineWord">
          { words }
        </ul>
      );
    }
  }