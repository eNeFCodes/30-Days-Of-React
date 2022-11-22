import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

const PostCard = ({
    currentPost,
    postAction,
    saveAction,
    maxTextLength
}) => {
    const textRef = useRef(null);
    const textHanldeRef = useRef(null);
    const [remainingText, setRemainingText] = useState(maxTextLength);
    const [isEditing, setIsEditing] = useState(false);

    const onTextChange = (e) => {
        const text = e.target.value;
        const remaining = maxTextLength - text.length;
        setRemainingText(remaining);
    }

    useEffect(() => {
        const { handler, post } = currentPost;
        textRef.current.value = post || '';
        textHanldeRef.current.value = handler || '';
        setIsEditing(textRef.current.value.length > 0);
        const remaining = maxTextLength - textRef.current.value.length;
        setRemainingText(remaining);
    }, [currentPost]);

    return (
        <div className="day28-postcard-main">
            <div className="day28-postcard-handle-container">
                <label htmlFor="day28-hanlde" >Handle: @</label>
                <input
                    id="day28-hanlde"
                    name="day28-hanlde"
                    className="day28-hanlde"
                    ref={textHanldeRef}
                    placeholder='Your handler here...'
                    disabled={isEditing}
                />
            </div>
            <div className="day28-postcard-container">
                <textarea
                    className="day28-postcard-textarea"
                    ref={textRef}
                    onChange={onTextChange}
                    maxLength={maxTextLength}
                    placeholder='Type something...'
                />
                <button className="day28-postcard-button" onClick={() => {
                    const value = textRef.current.value;
                    const handler = textHanldeRef.current.value;
                    if (value.length > 0 && handler.length > 0) {
                        if (isEditing) {
                            const updated = {
                                ...currentPost,
                                post: value
                            }
                            saveAction(updated);
                        } else {
                            postAction(handler, value);
                        }

                        textRef.current.value = '';
                        textHanldeRef.current.value = '';
                    } else {
                        alert('Please add handle or post');
                    }
                }} >
                    {isEditing ? 'SAVE' : 'POST'}
                </button>
                <span className="day28-postcard-textlength">{remainingText}</span>
            </div>
        </div >
    );
};
export default PostCard;

PostCard.propTypes = {
    postAction: PropTypes.func.isRequired,
    maxTextLength: PropTypes.number
}

PostCard.defaultProps = {
    maxTextLength: 250
}