import './Day28.css';
import { Day28Context, Day28ContentProvider } from './Context';
import PostCard from './PostCard';
import { useContext } from 'react';
import PostedCard from './PostedCard';

const Day28Content = () => {
    const {
        postData,
        currentPost,
        postAction,
        saveAction,
        editAction,
        deleteAction
    } = useContext(Day28Context);

    return (
        <div className='day28-main'>
            <h1>Post Your Thoughts!</h1>
            <PostCard
                currentPost={currentPost}
                postAction={postAction}
                saveAction={saveAction}
            />
            {postData.map((data, index) => (
                <PostedCard
                    key={index}
                    {...data}
                    editAction={editAction}
                    deleteAction={deleteAction}
                />
            ))}
        </div>
    );
};

const Day28 = () => {
    return (
        <Day28ContentProvider>
            <Day28Content />
        </Day28ContentProvider>
    )
};
export default Day28;