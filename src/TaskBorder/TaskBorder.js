import React, {Fragment} from 'react';

import StarSlider from '../StarSlider/StarSlider'

//r result
//s solution
//u update(reset) task 

class TaskBorder extends React.Component {

    middleResult = 0;
    middleCount = 0;

    constructor(props) {
        super(props);

        this.state = {
            option: null,
            isViewCheck: true,
            isViewSolution: false,
            isCalcResult: false,
            result: 0,
            count: 0
        }

        this.handleClcickCheck = this.handleClcickCheck.bind(this);
        this.handleClickRetry = this.handleClickRetry.bind(this);
        this.handleClickSolution = this.handleClickSolution.bind(this);
        this.handleResult = this.handleResult.bind(this);
    }

    componentDidUpdate() {
        console.log(this.middleCount);
        if (this.state.option === 'r') {
            this.setState({
                option: null,
                result: this.middleResult,
                count: this.middleCount
            });
        }

    }


    handleClcickCheck() {
        this.setState({
            option: 'r',
            isViewCheck: false,
            isViewSolution: true,
            isCalcResult: true
        });
    }

    handleClickRetry() {
        this.setState({
            option: 'u',
            isViewCheck: true,
            isViewSolution: false
        });
    }

    handleClickSolution() {
        this.setState({
            option: 's',
            isViewSolution: false
        });
    }

    handleResult(result, count) {
        this.middleResult = result;
        this.middleCount = count;
    }

    render() {

        let childWithProps;
        try {
            const child = React.Children.only(this.props.children);
            console.log("this");
            childWithProps = React.cloneElement(child, {option: this.state.option, onResult: this.handleResult})
        } catch {
            childWithProps = null;
        }

        const EndTask = () => {
            return (
                <Fragment>
                    <StarSlider fillStar={this.state.result} countStar={this.state.count}/>
                    <li key={1}><button onClick={this.handleClickRetry}>Retry</button></li>
                </Fragment>
            );
        }

        console.log(this.state.option);

        return (
            
            <div>
                { childWithProps }
                <ul>
                    {this.state.isViewCheck ? 
                        <li key={0}><button onClick={this.handleClcickCheck}>Check</button></li> : 
                        <EndTask />
                    }
                    {this.state.isViewSolution ? 
                        <li key={2}><button onClick={this.handleClickSolution}>Show solution</button></li> :
                        null
                    } 
                </ul>
            </div>
        );
    }
}


export default TaskBorder