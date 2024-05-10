import React from "react";

const Counter = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {
  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" onChange={onChange} value={diff} />
        <button onClick={onIncrease}>더하기</button>
        <button onClick={onDecrease}>빼기</button>
      </div>
    </div>
  );
};

export default Counter;
