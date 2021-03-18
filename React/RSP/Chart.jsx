import React, { useRef, useEffect } from 'react';
import ChartJs from 'react-chartjs-2';

function example() {
    const canvas = useRef(null);
    useEffect(() => {
        const config = {
        type: 'doughnut',
        data: {
            labels: [
            'Red',
            'Blue',
            ],
            datasets: [{
            label: 'My First Dataset',
            data: [60,30,10],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgba(0,0,0,0.1)'
            ],
            hoverOffset: 4
            }]
        }
        };
        const chart = new Chart(canvas.current.getContext('2d'), config);
        return () => chart.destroy();
    });
    return (
        <div className="chartjs-wrapper">
            <canvas ref={canvas} className="chartjs"></canvas>
        </div>
    )
        
}

export default example;