import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  // 1년치 지출 총액이 필요하다! (그래야 비율을 설정할 수 있으니까!)
  const dataPointsValues = dataPoints.map((dp) => dp.value); //지출액들만 월별로 추출.

  //1년치 총액
  //a: 리턴결과에 대한 누적괎, b: 배열에서 하나씩 꺼낸 값
  //   const totalValue = dataPointsValues.reduce((a, b) => {
  //     console.log(`a: ${a}, b: ${b}`);
  //     return a + b;
  //   }, 0); // 0: 초기인덱스값(기본값 1)
  const totalValue = dataPointsValues.reduce((a, b) => a + b, 0);

  // 그 중에서 제일 지출이 높은 값
  //   const maximumValue = Math.max(...dataPointsValues);
  //   console.log('maximum: ', maximumValue);
  return (
    <div className='chart'>
      {dataPoints.map(({ label, value }) => {
        return (
          <ChartBar
            key={label}
            label={label}
            currentValue={value}
            maxValue={totalValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
