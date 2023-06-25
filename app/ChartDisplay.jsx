import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function ChartDisplay({ chartType, data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Clear the previous chart
    if (window.myChart) {
      window.myChart.destroy();
    }

    // Create a new chart based on the selected chart type
    window.myChart = new Chart(ctx, {
      type: chartType,
      data: {
        labels: data.labels,
        datasets: data.datasets,
      },
    });

    return () => {
      // Cleanup when component unmounts
      if (window.myChart) {
        window.myChart.destroy();
      }
    };
  }, [chartType, data]);

  return <canvas ref={chartRef} />;
}
