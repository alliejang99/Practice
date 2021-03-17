import React, { memo } from 'react';

const Try = memo(({ tryInfo }) => {
    console.log('*************');
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
});

export default Try;

// memo: 모든 값이 렌더링 되지 않고 변하는 값만 렌더링 되도록 데이터를 최적화
// PureComponent: class 함수일 때 사용