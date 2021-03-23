import React, { useState, useCallback, useContext } from 'react'
import { START_GAME, TableContext } from './MineSearch';

const Form = () => {
  const [row, setRow] = useState(10);   // 세로줄
  const [cell, setCell] = useState(10);   // 가로 칸 수
  const [mine, setMine] = useState(20); // 지뢰 갯수
  const { dispatch } = useContext(TableContext);

  // 불필요한 렌더링 막기위한 useCallback
  const onChangeRow = useCallback((e) => {
    setRow(e.target.value)
  }, []);
  const onChangeCell = useCallback((e) => {
    setCell(e.target.value)
  }, []);
  const onChangeMine = useCallback((e) => {
    setMine(e.target.value)
  }, []);

  const onclickBtn = useCallback (() => {
    dispatch({ type: START_GAME, row, cell, mine });
  }, [row, cell, mine]);
 // return에 입력한 값을 action에 전하기
  return (
    <div>
      <input type="number" placeholder="세로" value={row} onChange={onChangeRow} />
      <input type="number" placeholder="가로" value={cell} onChange={onChangeCell} />
      <input type="number" placeholder="지뢰" value={mine} onChange={onChangeMine} />
      <button onClick={onclickBtn}>시작</button>
    </div>
  )
}

export default Form
