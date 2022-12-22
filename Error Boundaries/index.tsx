import React from 'react';

// Define a type for the props that the error boundary component will receive
type ErrorBoundaryProps = {
  children: React.ReactNode;
};

// Create an error boundary functional component using the React.FC type
// and the ErrorBoundaryProps type we defined above
const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  // Declare a state variable to track whether an error has occurred
  const [hasError, setHasError] = React.useState(false);

  // Use a try-catch block to catch errors thrown by the children
  try {
    return children;
  } catch (error) {
    setHasError(true);
    console.error(error);
  }

  // If an error has occurred, render a fallback UI
  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }
};

// Define a type for the props that the component will receive
type Props = {
  name: string;
  age: number;
};

// Create a functional component using the React.FC type
// and the Props type we defined above
const MyComponent: React.FC<Props> = (props) => {
  const { name, age } = props;

  // Throw an error to test the error boundary
  throw new Error('Test error');

  return (
    <div>
      <p>My name is {name} and I am {age} years old.</p>
    </div>
  );
};

// Wrap the component in an error boundary to catch any errors that it throws
export default () => (
  <ErrorBoundary>
    <MyComponent name="John" age={30} />
  </ErrorBoundary>
);