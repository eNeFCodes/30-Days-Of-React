import { Link, Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="day17-root">
            <h1>Welcome to 30 days of React</h1>
            <span>Navigate:</span>
            <ul>
                <li><Link to='dashboard'>Dashboard</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='settings'>Settings</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};
export default Root;