import React from 'react';
import './Chat.css';
import { Avatar } from '@material-ui/core';
import StopIcon from '@material-ui/icons/Stop';
import { selectImage } from './features/appSlice';
import { useDispatch } from "react-redux";
import { db } from './firebase';
import { useHistory } from 'react-router-dom';


function Chat({ id, data, profilePic, username, timestamp, imageUrl, read }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const open = () => {
        if (!read) {
            dispatch(selectImage(imageUrl));
            db.collection('posts').doc(id).set({
                read: true,
            }, { merge: true });
            history.push('/chats/view');
        }
    };
    return ( <
        div onClick = { open }
        className = "chat" >
        <
        Avatar className = "chat__avatar"
        src = { profilePic }
        /> <
        div className = "chat__info" >
        <
        h4 > { username } < /h4> <
        p > Tap to view - date = { new Date(timestamp.toDate()).toUTCString() } < /p> <
        /div> {!read && < StopIcon className = "chat__read" / > } <
        /div>
    );
}

export default Chat;