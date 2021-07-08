import React, {useState, useMemo, useEffect, useRef} from 'react';
import { mode as lineMode } from '../mode';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrop, useDrag } from 'react-dnd';
import { Observ } from './Observ';
import {DnDType} from './DnDType';
import {wordMode} from './wordMode'
import '../Styles/Word.css';
import { CSSTransition } from 'react-transition-group';

let lastMode = lineMode.default;

export default function DnDWord({data, mode, onStar}) {
    const allStar = useMemo(() => data.reduce((accumulator, line) => line.words.length + accumulator, 0), []);
    const [observ, setObserv] = useState(new Observ(data, 'current'));
    useEffect(() => {
      if (mode === lineMode.check && lastMode !== mode) {
        let stars = observ.getStars();
        onStar([stars, allStar]);
      } else if (mode === lineMode.default && lastMode !== mode) {
        observ.reset();
      } else if(mode === lineMode.solution && lastMode !== mode) {
        observ.solution();
      }
      lastMode = mode;
    }, [mode]);

    const dataDropElems = data.map((line, index) => {
        return <DropLine key={index}
        index={index}
        beginLine = {line.begin}
        endLine = {line.end}
        observ={observ} 
        mode={mode}
        />
    });

    return (
    <DndProvider backend={HTML5Backend}>
        {dataDropElems}
        <DragLine observ={observ} mode={mode}/>
    </DndProvider>
    );
}

function DragLine({observ, mode}) {

  const [data, setData] = useState(observ.dragData);


  useEffect(() => {
    observ.setObserv(setData, DnDType.drag);
  }, [observ]);

    const wordElems = data.map((obj) =>( 
    <Word key={obj.index} 
    dragItem={{index: obj.index, type: DnDType.drag, LineIndex: null}} 
    index={obj.index} 
    word={obj.word} 
    type={null} 
    canDrop={(dragIndex, dragType, dragLineIndex) => (
      observ.canDrop(dragIndex, obj.index, dragType, DnDType.drag, dragLineIndex, null)
    )}
    observMove={(dragIndex, dragType, dragLineIndex) => (
      observ.move(dragIndex, obj.index, dragType, DnDType.drag, dragLineIndex, null)
    )}/>));

    return (
    <ul className='line' data-type='drag'>
      { wordElems }
    </ul>);

}

function DropLine({index, beginLine, endLine, observ, mode}) {

    const [data, setData] = useState(observ.dropData[index]);

    useEffect(() => {
      observ.setObserv(setData, DnDType.drop, index);
    }, [observ]);

    const wordElems = data.map((obj, indx) => {
      
      let currentWordMode;
      switch(mode){
        case lineMode.default: 
          currentWordMode = wordMode.default;
          break;
        case lineMode.check:
          if(observ.check(index, indx, obj.index)) {
            currentWordMode = wordMode.plus;
          } else {
            currentWordMode = wordMode.minus;
          }
          break;
        case lineMode.solution:
          currentWordMode = wordMode.solution;
          break;
      }

      return (<Word key={obj.index} 
      dragItem={{index: obj.index, type: DnDType.drop, LineIndex: index}} 
      word={obj.word}
      canDrop={(dragIndex, dragType, dragLineIndex) => (
        observ.canDrop(dragIndex, obj.index, dragType, DnDType.drop, dragLineIndex, index)
      )}
      observMove={(dragIndex, dragType, dragLineIndex) => (
        observ.move(dragIndex, obj.index, dragType, DnDType.drop, dragLineIndex, index)
      )}
    mode = {currentWordMode}/>)});

    return (
      <ul className="line" data-type='drop'>
        {beginLine && <li className='word' data-type='default'>{beginLine}</li>}
        {wordElems}
        {endLine && <li className='word' data-type='default'>{endLine}</li>}
      </ul>
    );
}

function Word({dragItem, word, observMove, canDrop, mode}) {

  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop(() => ({
    accept: 'word',
    canDrop: (dragItem) => canDrop(dragItem.index, dragItem.type, dragItem.LineIndex),
    drop: (dragItem) => observMove(dragItem.index, dragItem.type, dragItem.LineIndex),
    collect(monitor) {
      return {
          handlerId: monitor.getHandlerId(),
      };
    },
  }), []);

  const [{},drag] = useDrag(() => ({
    type: 'word',
    canDrag: () => word !== '',
    item: dragItem,
  }), []);

  drag(drop(ref));

  let styleClass = 'word';
  switch(mode) {
    case wordMode.plus: 
      styleClass += ' ' + 'plus';
      break;
    case wordMode.minus: 
      styleClass += ' ' + 'minus';
      break;
    case wordMode.solution: 
      styleClass += ' ' + 'solution';
      break;
  }

  return (<li className={styleClass} data-type='DnDWord' ref={ref}>{word}
    <CSSTransition in={mode === wordMode.plus} unmountOnExit timeout={200} classNames='raiting'>
      <span className='plus'>{'+1'}</span>
    </CSSTransition>
    <CSSTransition in={mode === wordMode.minus} unmountOnExit timeout={200} classNames='raiting'>
        <span className='minus'>{'-1'}</span>
    </CSSTransition>
      </li>)
}