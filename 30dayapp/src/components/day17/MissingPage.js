import { useNavigate} from 'react-router-dom';

const MissingPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Page Not Found</h1>
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    );
};
export default MissingPage;