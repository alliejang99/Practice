import React, { useState, useRef, useEffect, useMemo } from 'react';
import Ball from './Ball';

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1) [0]);
    }

    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];

}

// hooks는 컴포넌트가 전체가 재실행 됨으로 useMemo를 사용하여 최적화
// useMemo: 복잡한 함수 결괏값을 기억함 -> 반복하는 컴포넌트를 한 번만 실행되도록 함
// useRef: 일반 값을 기억함

const Lotto = () => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []) //((factory) => getWinNumbers(), [input])
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts  = useRef([]);

    // useEffect(() => {}, []);
    useEffect(() => {
        console.log('useEffect');
        // runTimeOuts
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]); // 구조: () => []o / {}x
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    }, [timeouts.current]);   // -> [winBalls.length === 0] componentDidUpdate
                              // useEffect에서 []은 input, input이 빈 배열일 때는 componentDidMount와 동일
                              // [](배열)에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행

    // 초기화 값
    const onClickRedo = () => {
        console.log('onClickRedo')
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    };

    return(
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <Ball key={v} number={v} />)}
            </div>
            <div>보너스</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    )
}
export default Lotto;
