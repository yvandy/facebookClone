import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from "./firebase";
import { useState } from 'react';
import { useEffect } from 'react';
import { getDocs, collection, query, orderBy } from 'firebase/firestore';

function Feed() {

  const [posts, setPosts] = useState([]);

  const getDataFromFirebase = async () => {
    const querySnap = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    console.log(querySnap);
    const querySnapShot = await getDocs(querySnap);
    console.log(querySnapShot)    
    setPosts(querySnapShot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
  }
  // console.log(posts);

  useEffect(() => {
    getDataFromFirebase()
  }, [])

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      {
        posts.map((post)=> (
          <Post 
            key={post.id}
            profilepic={post.data.profilePic}
            message={post.data.messages}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        ))
      }
   
    </div>
  )
}

export default Feed