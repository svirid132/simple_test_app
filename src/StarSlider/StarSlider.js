import React from "react";

import { CSSTransition } from 'react-transition-group';

import {Scale, Star} from './SliderElems'

import './StarSlider.scss'


class StarSlider extends React.Component {

    constructor(props) {
        super(props); 

        this.widthScale = 220;
    }

    componentDidMount() {
    }

    render() {

        const progresScale = this.widthScale / this.props.countStar * this.props.fillStar;
        const isGoldStar = (this.props.countStar === this.props.fillStar);

        return (
                <div className="starSlider">
                    <div className="border">
                    <CSSTransition in={true} appear timeout={200} classNames='sliderBar'>
                        <Scale width={progresScale}/>
                    </CSSTransition>
                    <CSSTransition in={true} appear timeout={200} classNames='star'>
                        {isGoldStar ? <Star gold/> : <Star />}
                    </CSSTransition>
                    <span className="counter">{this.props.fillStar}<span className="seperate">/</span>{this.props.countStar}</span>
                    </div>
                </div>
        )
    }
}

export default StarSlider;