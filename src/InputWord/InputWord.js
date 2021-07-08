import {useEffect, useState} from "react";
import {mode as lineMode} from '../mode'
import {wordMode} from './wordMode'
import {Input, Line, Word, Raiting} from './components'
import { CSSTransition } from 'react-transition-group';

let lastMode = lineMode.default;

function getDefaultValue(data) {
    return (data.map((line) => {
        if (line.words){
            return Array(line.words.length).fill('');
        } else {
            return null;
        }
    }));
}

function getDefaultModes(inputData) {
    return (inputData.map((line)=>{
        if(Array.isArray(line)) return Object.assign([], line).fill(wordMode.default);
        return null;
    }));
}

export default function InputWord({data, mode, onStar}) {

    const [inputData, setChange] = useState(getDefaultValue(data));
    const [wordModes, setWordModes] = useState(getDefaultModes(inputData));

    useEffect(() => {
        if (mode === lineMode.check && lastMode !== lineMode.check) {
            const allStar = data.reduce((accum, line) => {
                if(line.words){
                    accum+=line.words.length;
                }
                return accum;
            }, 0);
            const rightStar = data.reduce((accum, line, lineIndex) => {
                if (line.words) {
                    accum += line.words.reduce((accum, word, wordIndex) => (inputData[lineIndex][wordIndex] === word ? accum += 1 : accum), 0);
                }
                return accum;
            }, 0);
            onStar([rightStar, allStar]);

            const wordModes = data.map((line, lineIndex) => {
                if (line.words) {
                    return line.words.map((word, wordIndex) => (inputData[lineIndex][wordIndex] === word ? wordMode.plus : wordMode.minus));
                }
                return null;
            });
            setWordModes(wordModes);
        } else if (mode === lineMode.solution && lastMode !== lineMode.solution) {
            const solutionWords = data.map((line) => {
                if (line.words){
                    return Object.assign([], line.words);
                } else {
                    return null;
                }
            });
            setChange(solutionWords);

            const solutionModes = inputData.map((line)=>{
                if(Array.isArray(line)) return Object.assign([], line).fill(wordMode.solution);
                return null;
            });
            setWordModes(solutionModes);
        } else if (mode === lineMode.default && lastMode !== lineMode.default){
            setChange(getDefaultValue(data));
            setWordModes(getDefaultModes(inputData));
        }
        lastMode = mode;
    }, [mode]); 

    const dataElem = data.map((line, index) => {
        if(line.words){
            return <WordLine 
                key={index} 
                index={index}
                begin={line.begin} 
                end={line.end} 
                contine={line.contine}
                inputData={inputData[index]}
                onChange={(text, inputIndex) => {
                    const obj = Object.assign([], inputData);
                    obj[index][inputIndex] = text;
                    setChange(obj);
                }
                }
                modes={wordModes[index]}/>;
        } else {
            return <Line><Word key={index}>{line.default}</Word></Line>;
        }
    });

    return (
        <>
            {dataElem}
        </>
    );
}

function WordLine({index, begin, end, contine, inputData, onChange, modes}) {

    const lineIndex = index;

    let handleChange = (event) => {

        if(modes[0] !== lineMode.default) return;

        const sliceValue = event.target.value.slice(-1);
        if(!isNaN(sliceValue) && (sliceValue !== '')) return;

        const text = event.target.value;
        const index = event.target.getAttribute("data-index");
        onChange(text, index);
    }; 

    const inputElem = inputData.map((data, index) => (<Word>
            <Input type='text' mode={modes[index]} data-index={index} value={data} onChange={handleChange}/>
                {<CSSTransition in={modes[index] === wordMode.plus || modes[index] === wordMode.minus} unmountOnExit timeout={{enter: 500 * lineIndex, exit: 0}} classNames='transition'>
                    <Raiting index = {lineIndex} mode={modes[index]}>{modes[index] === wordMode.plus ? '+1' : '-1'}</Raiting>
                </CSSTransition>}
             </Word>));

    return (
        <ul>
            <Word key={0}>{begin}</Word>
            {inputElem[0]}
            {contine &&     
                <>
                    <Word key={2}>{contine}</Word>
                    {inputElem[1]}
                </>}
            <Word key={4}>{end}</Word>
        </ul>
    );
}