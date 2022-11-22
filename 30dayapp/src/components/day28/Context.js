import React, { useState } from "react";
import { v1 as uuidv1 } from 'uuid';

export const Day28Context = React.createContext();
export const Day28ContentProvider = ({ children }) => {
    const [postData, setPostData] = useState([]);
    const [currentPost, setCurrentPost] = useState({});

    const postAction = (handler, text) => {
        // console.log(`@${handler} to post:`, text);
        setPostData([
            ...postData,
            {
                id: uuidv1(),
                handler: handler,
                post: text,
                date: new Date()
            }
        ])
    };

    const saveAction = (edited) => {
        const modified = postData.map(p => p.id === edited.id ? edited : p);
        setPostData(modified);
        setCurrentPost({});
    }

    const editAction = (id) => {
        const post = postData.find(p => p.id === id);
        if (post) {
            setCurrentPost(post);
        }
    }

    const deleteAction = (id) => {
        const filtered = postData.filter(p => p.id !== id);
        setPostData(filtered);
    }

    return (
        <Day28Context.Provider value={{
            postData,
            currentPost,
            postAction,
            saveAction,
            editAction,
            deleteAction
        }}>
            {children}
        </Day28Context.Provider>
    )
};