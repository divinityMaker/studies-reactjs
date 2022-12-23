import { useCallback } from 'react';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MyButton: React.FC<Props> = ({ onClick }) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick(event);
    },
    [onClick] // Only re-create the callback if `onClick` changes
  );

  return <button onClick={handleClick}>Click me</button>;
};
