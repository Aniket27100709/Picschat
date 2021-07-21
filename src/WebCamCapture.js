import React, { useRef, useCallback } from 'react';
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import { useHistory } from 'react-router-dom';
import './WebCamCapture.css';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
};

function WebCamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();


    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push('/preview');
    }, [webcamRef]);
    return ( 
        <div className = "webCamCapture" >
        <
        Webcam audio = { false }
        height = { videoConstraints.height }
        ref = { webcamRef }
        screenshotFormat = "image/jpeg"
        width = { videoConstraints.width }
        videoConstraints = { videoConstraints }
        /> <
        RadioButtonUncheckedIcon className = "webCamCapture__button"
        onClick = { capture }
        fontSize = "Large" /
        >
        
        </div>
    );
}

export default WebCamCapture;