import './App.css';

import SelectWord from './SelectWord/SelectWord.js'
import StarSlider from './StarSlider/StarSlider'
import SelectData from "./Data/SelectData.json";

import DnDWord from './DnDWord/DnDWord.js'
import DnDData from './Data/DnDData.json'

import InputWord from './InputWord/InputWord.js'
import InputData from './Data/InputData.json'

import React, {useState} from 'react';
import {TaskType} from './TaskType';
import {Btns} from './Btns.js';
import {mode} from './mode'

function Task({type, data}){

  const [_mode, setMode] = useState(mode.default);
  const [[fillStar, countStar], setStar] = useState([5, 10]);

  let TaskElem;
  switch(type) {
    case TaskType.select:
       TaskElem = <SelectWord data={data.lines} mode={_mode} onStar={setStar}/>;
       break;
    case TaskType.dnd: 
      TaskElem = <DnDWord data={data.lines} mode={_mode} onStar={setStar}/>;
      break;
    case TaskType.input:
      TaskElem = <InputWord data={data.lines} mode={_mode} onStar={setStar}/>;
      break;
    default:
      TaskElem = null;
  }

  return (
    <div className={"task"} style={{position: 'relative'}}>
      <h2>{data.name}</h2>
      {data.img && <img src={data.img} alt='optional picture'></img>}
      <p>{data.task}</p>
      {TaskElem}
      <Btns currentMode={_mode} onMode={setMode}/>
      {_mode !== mode.default && <StarSlider fillStar = {fillStar} countStar = {countStar}/>}
    </div>
    );
}

function App() {
  return (
    <div>
      <header>
        <h1>
          Test<span>English</span>
        </h1>
      </header>
      <Task type={TaskType.select} data={SelectData}/>
      <Task type={TaskType.dnd} data={DnDData}/>
      <Task type={TaskType.input} data={InputData}/>
    </div>
  );
}

export default App;
