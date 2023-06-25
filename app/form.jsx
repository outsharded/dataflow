'use client'
import { useState } from 'react';
const calculateExpression = require('../functions/math');
import ChartDisplay from './ChartDisplay';

export default function Form() {
  const [type, setType] = useState('');
  const [displayType, setDisplayType] = useState('');
  const [graphType, setGraphType] = useState('');
  const [data, setData] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the form data, such as making an API request
    if (type === 'math' || type === 'maths') {
      const expressionResult = calculateExpression(data);
      setResult(expressionResult);
    }
    console.log('Submitted:', { type, data, displayType, graphType });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="data">Data:</label>
        <input
          type="text"
          id="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="display-type">Display Type:</label>
        <select
          id="display-type"
          value={displayType}
          onChange={(e) => setDisplayType(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="graph">Graph</option>
          <option value="text">Text</option>
        </select>
      </div>

      {displayType === 'graph' && (
        <div>
          <label htmlFor="graph-type">Graphs Type:</label>
          <select
            id="graph-type"
            value={graphType}
            onChange={(e) => setGraphType(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="area chart">Area Chart</option>
            <option value="bar chart">Bar Chart</option>
            <option value="bubble chart">Bubble Chart</option>
            <option value="pie chart">Pie Chart</option>
            <option value="line chart">Line Chart</option>
            <option value="polar chart">Polar Chart</option>
            <option value="radar chart">Radar Chart</option>
            <option value="scatter chart">Scatter Chart</option>
          </select>
        </div>
      )}

      <button type="submit">Submit</button>

      {displayType === 'graph' && graphType && (
        <ChartDisplay chartType={graphType} data={result} />
      )}

      {displayType === 'text' && result && <p>Result: {result}</p>}
    </form>
  );
}
