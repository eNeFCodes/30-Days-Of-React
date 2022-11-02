/*
Exercises: What is React?

What is React?
    - Javascript library
What is a library?
    - collection of resources
What is a single page application?
    - single web application with that interacts with users by dynamically rewriting contents in the DOM
What is a component ?
    - an abstract and reusable bits of code 
What is the latest version of React?
    - v18.2.0
What is DOM?
    - Document Object Model
What is React Virtual DOM?
    - virtual representation of DOM that is sync to the actual DOM
What does a web application or a website(composed of) have?
    - DOM, scripts, text, audio, images, videos
*/

/*
Exercises: Why React?

Why did you chose to use react?
    - because it's popular and widely used open source library for building websites.
What measures do you use to know popularity ?
    - stars and community on github
What is more popular, React or Vue ?
    - they are almost close but vue has more stars
*/

/*
Exercises: JSX

What is an HTML element?
    - a component defined by an html tag
How to write a self closing HTML element?
    - by adding a '/' at the end and removing the closing counter tag </br>. ex. <br />
What is an HTML attribute? Write some of them
    - it's a markup that is used to define a component ex. styles
    - <label styles={{'backgroundColor': 'green'}} />
What is JSX?
    - JavaScript XML
What is babel?
    - a javascrip compiler
What is a transpiler?
    - transpiler is like a translator where syntax is converted to another supported syntax
*/

/*
Exercises: JSX Elements

What is a JSX element?
    - it could be a single or many of html elements wrapped in a parent html elements
Write your name in a JSX element and store it in a name variable
    - const name = <h1>Neil</h1>
Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
    <div>
        <h1>Neil</h1>
        <h2>PH</h2>
        <h2>Developer</h2>
        <h2>Male</h2>
    </div>
Write a footer JSX element
    <footer>
        <p>Author: Neil</p>
    </footer>
*/

/*
Exercises: Inline Style

Create a style object for the main JSX
    const styles = {'backgroundColor': 'green'};
Create a style object for the footer and app JSX
    const footerStyles = {'backgroundColor': 'green'};
    const appStyles = {'backgroundColor': 'green'};

    <footer styles={footerStyles}>Footer</footer>
Add more styles to the JSX elements
    <footer styles={{color: 'gray', fontSize: 20}}>Footer</footer>
*/

/*
Exercises: Internal Styles

Apply different styles to your JSX elements
    <body>
        <h1>Neil</h1>
        <p1>Internal CSS</p>

        <style>
            h1   {color: blue;}
            p    {color: red;}
        </style>
    </body>
*/

/*
Exercise: Inject data to JSX

Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)    
*/

const name = 'Neil';
const position = 'iOS Developer';
const div = (
    <div style={{ backgroundColor: 'gray' }}>
        <p style={{ color: black }}>Name: {name}</p>
        <p style={{ color: black }}>Position: {position}</p>
    </div>
);