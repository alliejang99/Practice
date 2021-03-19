import React, { useCallback, useEffect, useRef } from 'react';
import { CLICK_CELL } from './TicTacToc';

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
    console.log('td rendered');

    const ref = useRef([]);
    useEffect(() => {
        console.log(rowIndex === ref.current[0], rowIndex === ref.current[1], rowIndex === ref.current[2], rowIndex === ref.current[3]);
        ref.current = [rowIndex, cellIndex, dispatch, cellData];
    }, [rowIndex, cellIndex, dispatch, cellData])

    const onClickTd = useCallback(() => {
        console.log(rowIndex, cellIndex);
        
        if (cellData) {
            return;
        }
        // 한 번 클릭한 셀 바뀌지 않도록 (이전 값이 있으면 그대로 리턴)

        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    }, [cellData]);

    return (
        <td onClick={onClickTd}>{cellData}</td>
    );
};

export default Td;
