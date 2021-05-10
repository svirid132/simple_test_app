import React, {Component} from 'react';
import  './SelectWord.css';

export class Word extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let raiting = null;
        if  (this.props.raiting) {
            raiting = this.props.raiting > 0 ? 
                <span className="raiting plus">{this.props.raiting}</span> :
                <span className="rainting minus">{this.props.raiting}</span>;
        }

        const h1 = <h1>132</h1>

        return (
            <li className={ "word " + this.props.className } onClick={this.props.onClick}>{this.props.children}
            { raiting }
            </li>
        );
    }
}

const lineOption = {
    'r': 'result',
    's': 'solution' 
}

const wordStyle =  {//optionView
    '+1': 'plus',
    '-1': 'minus',
    's': 'solution'
}

class LineWords extends Component {

    rightIndexs;

    constructor(props) {
        super(props);

        const selectIndexs = new Array(props.words.length).fill(false);
        this.state = {selectIndexs: selectIndexs}

        this.rightIndexs = getRightIndexs(props.words, props.rights);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        const indexs = this.state.selectIndexs.slice();
        indexs[index] = !indexs[index];
        this.setState({selectIndexs: indexs});
    }

    componentDidUpdate() {
        if (this.props.option === 'r') {
            console.log("Line: " + this.rightIndexs.length);
            this.props.onResult(Math.max(result(this.state.selectIndexs, this.rightIndexs), 0), this.rightIndexs.length);
        }
    }

    render() {

        // if (this.props.option === 'u') selectIndexs = this.selectIndexs.map(() => false);

        const funcWords = (word, index) => {
            let style;
            let raiting = null;
            if(this.props.option === null) {
                style = this.state.selectIndexs[index] ? 'select': null;
            } else if (this.props.option === 'r') {
                console.log("r" + 23);
                if( this.state.selectIndexs.indexOf(index) !== -1){
                    const isRight = this.rightIndexs.indexOf(index) !== -1;
                    style = isRight ? 'minus' :  'plus'; 
                    raiting = isRight ? 1 : -1;
                }
            } else if(this.props.option === 's') {
                if(this.rightIndexs.indexOf(index) !== -1) style = 'solution';
            }
            return <Word key={index} onClick={() => this.handleClick(index)} className={style} raiting={raiting}>{word}</Word>
        }

        const words = this.props.words.map(funcWords);

        return (
            <ul>{words}</ul>
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