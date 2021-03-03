import reactDom from "react-dom";
import React, {useState, useEffect} from 'react';



const Room1 = (props) => {

    const [room, setRoom] = useState(0);

    useEffect(() => {
        setRoom(1);

    }, []);

    //setRoom(2);

    return (
        <div>
            Use styles to set font size to large
        </div>
    );
}

export default Room1;