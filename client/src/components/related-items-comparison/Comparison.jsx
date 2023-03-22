import React from 'react';

const Comparison = () => {
  return (
    <div >
      <h3>Comparison</h3>
      <table>
  <tbody>
    {Array.from({length: 10}).map((_, index) => (
      <tr key={index}>
        <td>Column 1, Row {index + 1}</td>
        <td>Column 2, Row {index + 1}</td>
        <td>Column 3, Row {index + 1}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  )
}
export default Comparison;