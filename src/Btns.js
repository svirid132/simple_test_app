import {mode} from './mode'

export function Btns({currentMode, onMode}) {

    let btnsElem = null;

    switch(currentMode) {
      case mode.default:
        btnsElem = <button name='check' onClick={() => onMode(mode.check)}>check</button>        
        break;
      case mode.check:
        btnsElem = (
        <ul className='btns'>
            <li key={0}><button name='reset' onClick={() => onMode(mode.default)}>reset</button></li>
            <li key={1}><button name='solution' onClick={() => onMode(mode.solution)}>solution</button></li>
        </ul>);
        break;
      case mode.solution:
        btnsElem = <button name='reset' onClick={() => onMode(mode.default)}>reset</button>      
        break;
    }

    return btnsElem;
}