import React, { Component } from 'react';

class ResponseChack extends Component {
    state = {
        state: 'waiting',
        message: '클릭하여 시작',
        result: [],
    };

    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
        const { state, message, result } = this.state
        if ( state === 'waiting' ) {
            this.setState({ // 하늘색일 때 클릭
                state: 'ready',
                message: '초록색이 되면 클릭하세요.',
            });
            this.timeout = setTimeout( () => {
                this.setState({
                    state: 'now',
                    message: '클릭!'
                });
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
        } else if ( state === 'ready' ){ // (초록색 이전에 클릭 시 체크)
            clearTimeout(this.timeout);
            this.setState({
                state: 'waiting',
                message: '초록색일 때 클릭해주세요.'
            });
        } else if ( state === 'now' ){
            this.endTime = new Date();
            this.setState((prevState) => { // 초록색일 때 클릭 (반응속도 체크)
                return {
                    state: 'waiting',
                    message: '클릭하여 시작.',
                    result: [...prevState.result,this.endTime - this.startTime],
                };
            });
        };
    };

    onReset = () => {
        this.setState({
            result: [],
        });
    };

    renderAverage = () => {
        const { result } = this.state;
        return result.length === 0
        ? null
        :<>
            <div>
                평균시간: 
                {this.state.result.reduce((a, c) => a + c ) / this.state.result.length}ms
            </div>
            <button onClick={this.onReset}>Reset</button>
        </>
    }

    render () {
        const { state, message } = this.state;
        return(
            <>
                <div
                    id="screen"
                    className={state}
                    onClick={this.onClickScreen}
                >
                    {message}
                </div>
                {this.renderAverage()}
            </>
        )
    }
}
export default ResponseChack;