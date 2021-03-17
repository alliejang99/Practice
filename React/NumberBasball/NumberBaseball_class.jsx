import React, { PureComponent, createRef } from 'react';
import Try_class from './Try_class';

function getNumbers(){
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i=0; i<4; i+=1) {
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball_class extends PureComponent {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [], // push 쓰면 x
    };

    onSubmitForm = (e) => {
        const { value, tries, answer } = this.state;
        e.preventDefault();
        if (this.state.value === this.state.answer.join('')){
            this.setState((prevState) => {
                return {
                    result: '홈런!',
                    tries: [...prevState.tries, { try: value, result: '홈런!' }],
                }
            });
            alert('Replay');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
            this.inputRef.current.focus();
        } else { // 답 틀렸으면
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) { // 10번 이상 틀렸을 때
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
                });
                alert('Replay');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
                this.inputRef.current.focus();
            } else {
                for (let i=0; i<4; i+=1){
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState((prevState) => {
                    return {
                        tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
                        value: '',
                    };
                });
                this.inputRef.current.focus();
            }
        }
    };
    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({
            value: e.target.value,
        });
    };

    // 반복문
    // fruits = [
    //     { fruit: 'a', taste: '가' },
    //     { fruit: 'b', taste: '나' },
    //     { fruit: 'c', taste: '다' },
    //     { fruit: 'd', taste: '라' },
    //     { fruit: 'e', taste: '마' },
    // ];

    inputRef = createRef(); // this.inputRef
    
    render(){
        const { result, value, tries } = this.state;

        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input
                        ref={this.inputRef}
                        maxLength={4}
                        value={value}
                        onChange={this.onChangeInput}
                    />
                    <button> 입력 </button>
                </form>
                <div>시도: {tries.length} </div>
                <ul>
                    {tries.map((v, i) => {
                        return (
                            <Try_class key={`${i + 1}차 시도 :`} tryInfo={v} />
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball_class;