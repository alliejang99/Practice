import React, { useState, useRef, useCallback, useMemo } from 'react';

function example() {
    const canvas = useRef(null);
    useEffect(() => {
        const cfg = {
        type: 'doughnut',
        data: {
            labels: [
            'Red',
            'Blue',
            'Yellow'
            ],
            datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
            }]
        }
        };
        const chart = new Chart(canvas.current.getContext('2d'), cfg);
        return () => chart.destroy();
    });
    return <div className="chartjs-wrapper"><canvas ref={canvas} className="chartjs"></canvas></div>;
}

export default example;