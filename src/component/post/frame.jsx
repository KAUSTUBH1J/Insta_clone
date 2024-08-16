import React, { useState, useContext } from 'react';
import profile from '../../image/pexels-photo-771742.jpeg';
// import post from '../../image/4x5.jfif';
import post from '../../image/pexels-bemagnified-media-marketing.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faBookmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import CSSLoader from "../../functions/CSSLoader";
import { ThemeContext } from '../context';

function Frame() {
    CSSLoader('assets/css/post.css');
    const { isDarkMode } = useContext(ThemeContext);

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [like, setLike] = useState(false);
    const handleCommentClick = () => {
        setShowComments(!showComments);
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    const like_post = () =>{
        setLike(!like);
    }

    return (
        <div className="post_container border" style={{ background: isDarkMode ? '#1e1e1e' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
            <div className="d-flex post_up">
                <div className="profile_image_cantaier">
                    <img src={profile} alt="Profile" className="post_profile_img" />
                </div>
                <div className="username_container">
                    <p>Kaustubh.jadhav</p>
                    <span>Suggested for you</span>
                </div>
            </div>
            <div className="post_img_constainer">
                <img src={post} alt="Post" className="post_img" />
            </div>
            <div className="post_description">
                <div className="post_actions d-flex">
                    <div>
                        <FontAwesomeIcon className="action_icon" icon={faHeart} style={{ color: like ? 'red': '' }} onClick={()=>{ like_post() }} />
                        <FontAwesomeIcon className="action_icon" icon={faComment} onClick={handleCommentClick} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="action_icon" icon={faBookmark} />
                    </div>
                </div>
                {showComments && (
                    <div>
                        <div className="comments_section">
                            {comments.map((comment, index) => (
                                <div className='d-flex m-2 align-items-center'>
                                    <div className='d-flex post_up_comm'>
                                        <div className="profile_image_cantaier_comm">
                                            <img src={profile} alt="Profile" className="post_profile_img_comm" />
                                        </div>
                                        <div className="username_container_comm">
                                            <p>Kaustubh.jadhav</p>
                                        </div>
                                    </div>
                                    <p key={index} className="comment ">{comment}</p>
                                </div>
                            
                                
                            ))}
                        </div>
                        <div className="comment_input d-flex mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Add a comment..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                            <button className="btn btn-primary ms-2" onClick={handleAddComment}><FontAwesomeIcon icon={faPaperPlane} /></button>
                        </div>
                    </div>
                )}
                <div className="caption mt-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet tempore laborum.</p>
                </div>
            </div>
        </div>
    );
}

export default Frame;
