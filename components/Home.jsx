import React, { useState } from 'react';

export default function Home() {
  const [inputvalue, setInputvalue] = useState(0);
  const styleHome = {
    margin: '10px',
    padding: '10px',

    fontFamily: 'arial',
    fontWeight: 'bold',
  };

  const increment = () => {
    setInputvalue(inputvalue + 1);
  };

  const decrement = () => {
    setInputvalue(inputvalue - 1);
  };

  return (
    <div>
      <input
        style={styleHome}
        type="number"
        value={inputvalue}
        placeholder="Type something"
        readOnly
      />

      <button
        onClick={decrement}
        style={{
          margin: '10px',
          backgroundColor: 'blue',
          color: 'white',
          padding: '0.5em',
        }}
      >
        Minus
      </button>
      <button
        onClick={increment}
        style={{
          margin: '10px',
          backgroundColor: 'blue',
          color: 'white',
          padding: '0.5em',
        }}
      >
        Plus
      </button>
    </div>
  );
}
