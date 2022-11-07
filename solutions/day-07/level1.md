
How do you write a pure JavaScript function
    function me() {
        return 'I am a function';
    }

What is inheritance and how do you make a child from a parent class?
    - inheritance is adopt the defined functions or attributes from it's parents.

    class Child extends React.Component {
        constructor(props) {
            super(props)
        }
    }

What is class based React component ?
    - class based components are defined ass a javascript class that inherits from React.Component.

What is the difference between functional React component and class based React component ?
    - class based components needs a constructor and needs to inherit from React.Component
    - functional components does not need to specifically define a class and an inheritance. It is just a normal function that returns a JSX element.

When do we need to use class based components instead of functional components
    - it depends, however in the latest version its better working with functional components than the long and complex class based components

What is the use cases of class based component ?
    - this is the only way to define a component in the old version of react and the use is the same as a functional component

Which type of component do use most frequently ? functional or class-based component
    - in the latest, I prefer working with the function components as it is easy to manage. codes are short and easier to read.

What is React life cycle ? (not covered yet) ?
    1. initialization
        - initialization with constructor props if class based component
        - in a functional components props is already available as an function arguments

    2. render
        - jsx element is rendered

    3. componentdidmount
        - componentDidMount is called after successful render
        - useEffect is called as a counterpart for didUpdate, didMount, didUnmount in a functional component

What is state in React ? (not covered yet)
    - state is like local database that defines self
    - it contains all of the defined state for later use