What is the importance of React Folder Structure and File Naming
    - this is for easy maintenance and readability, clean and organized structure can also help other devs to easily understand which is which.

How do you export file
    - export const ComponentName;
    - export default ComponentName;

How do you import file
    - import { ComponentName } from './ComponentName';
    - import ComponentName from './ComponentName';

Make a component of module and export it as named or default export
    export const ComponentName = () => { 
        return (
            <div>Hello</div>
        );
    };

    const ComponentName = () => {
        return (
            <div>Hello</div>
        );
    };
    export default ComponentName;


Make a component or module and import it
    export const ComponentName = () => { 
        return (
            <div>Hello</div>
        );
    };

    const ComponentName = () => {
        return (
            <div>Hello</div>
        );
    };
    export default ComponentName;

    import { ComponentName } from './ComponentName';
    import ComponentName from './ComponentName';

Change all the components you have to different folder structure
    - change folder structure of day9