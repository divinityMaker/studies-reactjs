useRef is a React hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

In this example, MyInput is a functional component that creates a inputRef using useRef. The inputRef is attached to an input element using the ref attribute. When the handleClick function is called, it checks if the inputRef.current property is not null, and if it is not, it calls the focus method on the input element.

useRef can be useful for accessing DOM elements or for keeping track of some value that should persist between re-renders of a component. It can also be used to store a reference to a value that will not change, such as a constant or a function.
