import { useNavigate} from 'react-router-dom';

const Root2 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>App</h1>
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    );
};
export default Root2;