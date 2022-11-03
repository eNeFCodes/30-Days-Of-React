What is the difference between a regular function and an arrow function?
    - arrow function can skip the return in an inline syntax

What is a React Component?
    - reusable codes responsible for building UIs.

How do you make a React functional component?
    const ReactComponent = () => {
        return (
            <div>
                This is Functional Component
            </div>
        );
    };

What is the difference between a pure JavaScript function and a functional component?
    - functional component is used to define a react component 
    - pure javascript function is a block of codes design to perform specific tasks
How small is a React component?
    - it can be a 1 html element or more
    
Can we make a button or input field component?
    - yes

Make a reusable Button component.
    const ReusableButton = ({ click }) => (
        <button onClick={click}>Click me</button>
    );


Make a reusable InputField component.
    const ReusableInput = ({ onChange, value }) => (
        <input type="text" onChange={onChange} name="input" value={value}/>
    );

Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).

const Alert = ({ isSuccess }) => {
    return (
        <div>
            {isSuccess 
            ? <p>Success</p>
            : <p>Warning</p>
            }   
        </div>
    );
};
