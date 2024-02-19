// LikeCommentSaveCounter.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,  faComment,  faBookmark,  faUser,
} from '@fortawesome/free-solid-svg-icons';
import './style.css';
const LikeCommentSaveCounter = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [saved, setSaved] = useState(false);
  const handleLike = () => { setLikeCount((prevCount) => prevCount + 1);
  };
  const handleComment = () => { setCommentCount((prevCount) => prevCount + 1);
  };
  const handleSave = () => {setSaved((prevSaved) => !prevSaved);
  };
  return (
    <div className="like-comment-save-container">
      <div className="user-info">
        <div className="user-pic">
          <img src="https://placekitten.com/50/50" alt="User" className="user-image" />
        </div>
        <div className="user-details"><span className="username">CatBoy</span></div>
      </div>
      <div className="post-container">
        <img src="https://placekitten.com/200/200" alt="Post" className="post-image" />
      </div>
      <div className="actions-container">
        <button onClick={handleLike}>
          <FontAwesomeIcon icon={faHeart} className={`like-icon${likeCount > 0 ? ' liked' : ''}`}/>
          {likeCount > 0 && <span className="count">{likeCount}</span>}
        </button>
        <button onClick={handleComment}>
          <FontAwesomeIcon icon={faComment} />
          {commentCount > 0 && <span className="count">{commentCount}</span>}
        </button>
        <button onClick={handleSave}>
          <FontAwesomeIcon icon={faBookmark}  className={`save-icon${saved ? ' saved' : ''}`}/>
        </button>
      </div>
    </div>
  );
};
export default LikeCommentSaveCounter;
