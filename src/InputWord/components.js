import styled, { css } from 'styled-components'
import {wordMode} from './wordMode'

export const Input = styled.input`
    width: 50px;
    ${props => (
        props.mode === wordMode.minus &&
        css`
            background-color: rgb(231, 15, 15);`)
    };
    ${props => (
        props.mode === wordMode.plus &&
        css`
            background-color: rgb(58, 187, 47);`)
    };
    ${props => (
        props.mode === wordMode.solution &&
        css`
            background-color: rgb(77, 216, 209);
            border: 2px dotted rgb(58, 83, 20);
            text-align: center;`
    )};
`

export const Raiting = styled.span`
        position: relative;
        display: inline-block;
        top: -10px;
        right: 10px;
        font-size: 1.2rem;
        text-align: center;
        width: 2rem;
        border-radius: 5px;

        ${props => (
            props.mode === wordMode.plus && 
            css`
                background-color: rgb(33, 190, 33);
                border: 0.2rem solid #146822;
            `
        )};
        ${props => (
            props.mode === wordMode.minus && 
            css`
                background-color: #ff453e;
                border: 0.2rem solid #d6302a;`
        )};

        &.transition-enter {
            opacity: 0%;
        }
        &.transition-enter-active {
            opacity: 100%;
            transition: opacity 200ms ${props => css`${props.index * 200}ms`};
        }
`

export const Line = styled.ul`
    margin: 0;
    padding: 0;
`

export const Word = styled.li`
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 5px; 
    list-style-type: none;
`