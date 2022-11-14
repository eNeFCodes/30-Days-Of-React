import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Settings</h1>
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    );
};
export default Settings;