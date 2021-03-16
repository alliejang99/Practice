import React, { Component } from 'react';

function getNumbers(){

}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {

    }
    onChangeInput = (e) => {
        e.preventDefault();
    }

    render(){
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input
                        maxLength={4}
                        value={value}
                        onChange={(e)=>{onChangeInput}}
                    />
                </form>
                <div>시도: {this.state.tries.length} </div>
                <ul>
                    <li></li>
                </ul>
            </>
        );
    }
}

export default NumberBaseball;