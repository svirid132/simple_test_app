import React, {Component} from 'react';
import  './SelectWord.css';

const styleWord = {
    'us': 'unselect',
    's': 'select',
    'p': 'plus',
    'm': 'minus',
    'sol': 'solution' 
  }
  
class Word extends Component {
  
    render() {
  
        let raiting = null;
        if  (this.props.raiting) {
          const isPlus = this.props.raiting > 0;
            raiting =  
                <span className={ isPlus ? 
                  "raiting plus" : 
                  "raiting minus" }> { (isPlus? '+' : '') + this.props.raiting}
                </span>
        }
  
        return (
            <li className={ "word " + styleWord[this.props.style] } onClick={this.props.onClick}>
              {this.props.value}
              { raiting }
            </li>
        );
    }
}
  
  const modeLineWords = {
    'd': 'default',
    'r': 'result',
    's': 'solution'
  }
  
 export default class LineWords extends React.Component {
  
    rightWordIndexs;
  
    constructor(props) {
      super(props);
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(index) {
        this.props.onClick(index);
    }
  
    render() {
  
      const Words = this.props.simpleWords.map((word, index) => {
        
        let style = 'us';
        let raiting = null;
        const isRight = this.props.rightWordIndexs.indexOf(index) !== -1;
        switch(this.props.modeLineWords) {
          case 'r':
            if (this.props.selectIndexs[index]) {
              style = isRight ? 'p': 'm';
              raiting = isRight ? 1 : -1;
            } else {
              style = 'us';
            }
            break;
          case 's':
            style = isRight ? 'sol' : 'us';
            break;
          case 'd':
            style = this.props.selectIndexs[index] ? 's' : 'us';
            break;
        }
  
        return <Word key={index}
          value={word} 
          raiting={null} 
          style={style} 
          onClick={this.props.modeLineWords === 'd' ? () => this.handleClick(index) : null}
        />
      });
  
      return (
        <ul className="lineWord">
          { Words }
        </ul>
      );
    }
  }