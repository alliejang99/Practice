import React, { Component } from 'react';

function getNumbers(){

}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
    };

    onSubmitForm = () => {}
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
            </>
        );
    }
}

export default NumberBaseball;