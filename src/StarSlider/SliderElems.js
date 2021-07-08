import styled, { css } from 'styled-components'
import {ReactComponent as StarSvg} from './star.svg';

export const Scale = styled.span`
    height: 15px;
    position: absolute;
    background-color: #DDDDDD;
    border-radius: 5px;
    top: 11px;
    left: 25px;
    width: 220px;
    
    &::before {
        content: "";
        height: inherit;
        border-radius: 5px;
        background-color: green;
        position: absolute;
        width: ${(props) => props.width}px;
        transition: width 2s ease-out;
    }

    &.sliderBar-appear {
        &::before {
            width: 0px;
        }
    }
`

export const Star = styled(StarSvg)`
    width: 38px;
    height: 30px;
    position: absolute;
    left: 220px;
    top: 2px;

    path {
        fill: #DDDDDD;
        stroke-width: 5px;
        ${props => props.gold && css` transition: fill 0s 1.6s; fill: gold;`}
    }

    &.star-appear {
        path {
            fill: #DDDDDD;
            stroke-width: 5px;
        }
    }
`