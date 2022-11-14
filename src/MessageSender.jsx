import './MessageSender.css';
import { Videocam, PhotoLibrary, InsertEmoticon } from '@material-ui/icons';
import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { collection, Timestamp, addDoc } from "firebase/firestore";
import db from "./firebase";

function MessageSender() {
    const [{ user }] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();        

        const docData = {
            messages: input,
            name: user?.displayName,
            timestamp: Timestamp.fromDate(new Date()),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        }
        await addDoc(collection(db, "posts"), docData);
        setInput('');
        setImageUrl('')
    }

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`What's on your mind ? ${user.displayName}`}
                        className='messageSender__input'
                    />
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder='image URL (optional) ' />
                    <button onClick={handleSubmit} type='submit'>
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{ color: 'red' }} />
                    <h3> Live video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h3> Live video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h3> Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender