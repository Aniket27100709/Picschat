import React, { useEffect } from 'react';
import './App.css';
import WebCamCapture from './WebCamCapture';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Chats from './Chats';
import Preview from './Preview';
import ChatView from './ChatView';
import { login, logout, selectUser } from './features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';

function App() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(login({
                    username: authUser.displayName,
                    profilePic: authUser.photoUrl,
                    id: authUser.uid,
                }))
            } else {
                dispatch(logout())
            }
        })
    }, []);
    return ( <
        div className = "App" >
        <
        Router > {!user ? ( <
                Login / >
            ) : ( <
                >
                <
                img className = "App__logo"
                src = "https://image.freepik.com/free-vector/abstract-dynamic-pattern-wallpaper-vector_53876-59131.jpg"
                alt = "" / >
                <
                div className = "App__body" >
                <
                div className = "App__bodyBackground" >
                <
                Switch >
                <
                Route path = "/chats/view" >
                <
                ChatView / >
                <
                /Route> <
                Route path = "/chats" >
                <
                Chats / >
                <
                /Route> <
                Route path = "/preview" >
                <
                Preview / >
                <
                /Route> <
                Route path = "/" >
                <
                WebCamCapture / >
                <
                /Route> <
                /Switch> <
                /div> <
                /div> <
                />
            )
        }

        <
        /Router> <
        /div>
    );
}

export default App;