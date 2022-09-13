import React from 'react';

import ChartBar from './ChartBar';

import './Chart.css';

const Chart = props => {
    const dPValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const Maxim = Math.max(...dPValues);

    return <div className="chart"> 
    { props.dataPoints.map(dataPoint => ( 
    <ChartBar 
    key={dataPoint.label}
    value={dataPoint.value}
     maxValue={Maxim} 
     label={dataPoint.label}
     />
     ))}
    </div>
    
};

export default Chart;