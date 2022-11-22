import { useRef, useState } from "react";
import PropTypes from 'prop-types';

const editIcon = require('../../assets/edit.png');
const deleteIcon = require('../../assets/delete.png');

const PostedCard = ({
    id,
    handler,
    post,
    date,
    editAction,
    deleteAction,
}) => {
    return (
        <div className="day28-postedcard-container">
            <span className="day28-postcard-handle">@{handler},</span>
            <span className="day28-postcard-post">{post}</span>
            <div className="day28-postcard-footer">
                <span className="day28-postcard-footer-text">{id}</span>
                <div className="day28-postcard-footer-controls">
                    <button className="day28-postcard-footer-button" onClick={() => editAction(id)}>
                        <img className="day28-postcard-footer-icon" src={editIcon} />
                    </button>
                    <button className="day28-postcard-footer-button" onClick={() => deleteAction(id)}>
                        <img className="day28-postcard-footer-icon" src={deleteIcon} />
                    </button>
                </div>
                <span className="day28-postcard-footer-text">{date.toLocaleDateString()}</span>
            </div>
        </div>
    );
};
export default PostedCard;