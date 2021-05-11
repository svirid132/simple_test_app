import React, {Component} from 'react';
import  './SelectWord.css';

const styleWord = {
    'us': 'unselect',
    's': 'select',
    'p': 'plus',
    'm': 'minus',
    'sol': 'solution' 
  }
  
export class Word extends Component {
  
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
  
 export class LineWords extends React.Component {
  
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

class SelectWords extends Component {

    middleResult = 0;
    middleCount = 0;

    constructor(props) {
        super(props);

        this.handleResult = this.handleResult.bind(this);

    }

    handleResult(result, count) {
        this.middleResult += result;
        this.middleCount += count;
    }

    componentDidUpdate() {
        if (this.props.option === 'r') {
            console.log("SelectWords", this.middleCount);
            this.props.onResult(this.middleResult, this.middleCount);
            this.middleResult = 0;
            this.middleCount = 0;
        }
    }

    render() {

        const data = this.props.data;
        const arrLineWords = new Array();
        let index = 0;
        for (let property of Object.keys(data)) {
            if (property.indexOf('line') !== -1) { 
                const words = data[property].words;
                let rights = null;
                if ("right" in data[property]) rights = data[property].right;
                arrLineWords.push( <LineWords key={index} words = {words} rights = {rights} option={this.props.option} onResult={this.handleResult}/> );
                ++index;
            }
        }

        return (
            <div className = "task">
                <h2>{data.name}</h2>
                <img src="images/image1.jpg" alt="standart image"></img>
                <p>{data.task}</p>
                { arrLineWords }
            </div>
        );
    }
}

function result(indexSelects, indexRights) {   

    let func = (accumulator, value) => {
        let indexFind = indexRights.indexOf(value);
        return indexFind === -1 ? --accumulator : ++accumulator;
    }

    return indexSelects.reduce(func, 0);
}

function getRightIndexs(words, rights) {
    const rightIndexs = new Array();
    if (rights === null){ 
        return [];
    }
    rights.forEach(right => {
        const rightIndex = words.indexOf(right);
        if (rightIndex !== -1){ 
            rightIndexs.push(rightIndex);
        }
    });

    return rightIndexs;
}

export default SelectWords;