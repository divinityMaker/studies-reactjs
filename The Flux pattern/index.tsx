import * as React from "react";

interface Props {
  getState: () => { count: number };
  increment: () => void;
  decrement: () => void;
}

export const Counter: React.FC<Props> = ({
  getState,
  increment,
  decrement,
}) => {
  const { count } = getState();
  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};

ReactDOM.render(
  <Counter getState={getState} increment={increment} decrement={decrement} />,
  document.getElementById("root")
);
