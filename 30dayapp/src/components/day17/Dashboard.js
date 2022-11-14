import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    );
};
export default Dashboard;