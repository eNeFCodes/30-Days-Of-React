What is component life cycles
    - the process of mounting, updating, and unmounting components in a react application

What is the purpose of life cycles
    - it is to give life to an application where each phase corresponds to events where you can set your configuration.
    - it also sets the process in order from when it started and ended.

What are the three stages of a component life cycle
    - mounting, updating, unmounting

What does mounting means?
    - it is the process of adding the components to the DOM

What does updating means
    - it is the phase where component updates occurs after it was mounted

What does unmounting means?
    - it is when the component gets remove from the DOM

What is the most common built-in mounting life cycle method?
    - constructor, componentWillMount, render, componentDidMount, componentWillUnmount,

What are the mounting life cycle methods?
    - constructor()
    - static getDerivedStateFromProps()
    - render()
    - componentDidMount()

What are the updating life cycle methods?
    - static getDerivedStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()

What is the unmounting life cycle method?
    - componentWillUnmount()