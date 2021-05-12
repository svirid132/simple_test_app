import React from "react";

import {ReactComponent as ReactLogo} from './star.svg';

import styled, { css } from 'styled-components'

import './StarSlider.css'


const Scale = styled.span`
    width: ${(props) => props.widthScale}px;

    &:before {
        width: ${props => (props.isViewProgres ? props.progresScale : 0)}px;
        transition: width 1s ease;
}`;

const Star = styled((props) => < ReactLogo className={props.className} />)`
    & path {
        fill: ${(props) => props.isFillStar ? "gold" : "#DDDDDD"};
        ${props => props.isFillStar && 
            css`
                transition: fill 0s ease 0.7s;
        `}
    }
` 

class StarSlider extends React.Component {

    widthScale = 220;
    progresScale;
    isFillStar;

    constructor(props) {
        super(props); 

        this.progresScale = this.widthScale / this.props.countStar * this.props.fillStar;
        this.isFillStar = (this.props.countStar === this.props.fillStar);
        this.state = {
            isViewProgres: false,
            isFillStar: false
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            isViewProgres: true,
            isFillStar: this.isFillStar
        }), 0);
    }

    render() {
        return (
            <div className="starSlider">
                <div className="border">
                    <Scale className="scale" widthScale={this.widthScale} isViewProgres={this.state.isViewProgres} progresScale={this.progresScale}/>
                    <Star className="star" isFillStar={this.state.isFillStar}/>
                    <span className="counter">{this.props.fillStar}<span className="seperate">/</span>{this.props.countStar}</span>
                </div>
            </div>
        )
    }
}

export default StarSlider;