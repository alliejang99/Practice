import React from 'react';
import Tr from './Tr';

const Table = ({ onClick, tableData, dispatch }) => {
    return (
        <table>
            <tbody>
                {Array(tableData.length).fill().map((tr, i) => (
                    <Tr key={i} dispatch={dispatch} rowIndex={i} rowData = {tableData[i]} />
                    ))}
                {/* i는 행(줄) */}
            </tbody>
        </table>
    );
};

export default Table;