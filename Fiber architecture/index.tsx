import React, { Suspense } from 'react';

// Define a type for the props that the component will receive
type Props = {
  name: string;
  age: number;
};

// Create a functional component using the React.FC type
// and the Props type we defined above
const MyComponent: React.FC<Props> = (props) => {
  // Render a loading indicator while the component is suspended
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <p>My name is {props.name} and I am {props.age} years old.</p>
      </div>
    </Suspense>
  );
};

export default MyComponent;