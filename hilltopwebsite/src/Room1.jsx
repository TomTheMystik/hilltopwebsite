import reactDom from "react-dom";
import React, {useState, useEffect} from 'react';
import PhotoViewer from './PhotoViewer';


const Room1 = (props) => {

    const [room, setRoom] = useState(0);

    useEffect(() => {
        setRoom(1);

    }, []);

    //setRoom(2);

    return (
        <div>
            <PhotoViewer/>
        </div>
    );
}

export default Room1;
