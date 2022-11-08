import React from 'react'
import './Widgets.css'
import { ThumbUp, ChatBubbleOutline } from '@material-ui/icons';

function Widgets() {

  const commentHandler = () => {

  }

  return (

    <div className='widget__main'>
      <video src="https://video.wixstatic.com/video/2bcfa3_4a5922b8683643729c692a3bac12dace/1080p/mp4/file.mp4" muted width="198" height="240" style={{ height: "240", width: "198", objectFit: "cover", borderRadius: "15px 15px 0px 0px" }} controls>
      </video>
      <div className='video__option'>
        <div>
          <ThumbUp />
          <p>Like</p>
        </div>
        <div onClick={commentHandler}>
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
      </div>
    </div>

  )
}

export default Widgets