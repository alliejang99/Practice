const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (parseInt(this.state.value) === this.state.first * this.state.second){
            setResult('정답 :' + value);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('오답');
            setValue('');
            inputRef.current.focus();
        }
    };

return (
    <>
        <div>{first} * {second} = ?</div>
        <form onSubmit={onSubmitForm}>
            <input 
                ref={inputRef} 
                type="number"
                value={value} 
                onChange={onChangeInput} 
            />
            <button>입력</button>
            <div id="result">{result}</div>    
        </form>
    </>
    );
}

module.exports = GuGuDan;