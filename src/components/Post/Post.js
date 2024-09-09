import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <div className='postContainer'>
        <div className="postTop">
          <div className="postTopLeft">
          <img src="/images/1.jpg" alt="" className="postImage" />
          <span className="postUserName">Kokila Gihan</span>
          <span className="postTime">5 mins ago</span>
          </div>
        </div>
        <div className="postCenter">
          <div className="postCaption">
            Hello I am Batman..! Do you understand?
          </div>
          <img src="/images/1.jpg" alt="" className="postedImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/images/like.png" alt="" className="reactionPic" />
            <img src="/images/heart.jpg" alt="" className="reactionPic" />
            <img src="/images/haha.jpeg" alt="" className="reactionPic" />
            <span className="likeCount">Batman and 225 others</span>
          </div>
          <div className="postBottomRight">
            <span className="commentCount">15 comments</span>
          </div>
        </div>
      </div>
    </div>
    
  )
}
