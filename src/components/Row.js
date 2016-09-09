import React from 'react';

const activeStyles = {
  background: '#65dc7f',
  color: 'white'
}


const Row = ({n, img, name, past30, allTime, type}) => {
  return (
    <tr>
      <td>{n}</td>
      <td><img src={img} role="presentation"/>{' '}{name}</td>
      <td style={type === 'past30' ? activeStyles : { height: 'auto'}}>{past30}</td>
      <td style={type === 'past30' ? {height: 'auto'} : activeStyles}>{allTime}</td>
    </tr>
  );
}

export default Row;
