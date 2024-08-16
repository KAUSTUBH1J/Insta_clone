import React,{useContext} from "react";
import CSSLoader from "../functions/CSSLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment,faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './context';

function Profile_page(){
    const { isDarkMode } = useContext(ThemeContext);
    CSSLoader('assets/css/profile.css');
    return(
        <>
            <div class="profile-container" style={{ background: isDarkMode ? '#212529':'', color: isDarkMode ? '#fff':'' }}>
                <div class="header">
                    <div class="profile-pic"></div>
                    <div class="profile-info">
                        <div class="username">username</div>
                            <div class="stats">
                                <div class="stat"><span class="stat-number">123</span> Posts</div>
                                <div class="stat"><span class="stat-number">456</span> Followers</div>
                                <div class="stat"><span class="stat-number">789</span> Following</div>
                            </div>
                        <div class="bio">This is the bio of the user. It can include some personal information and links.</div>
                    </div>
                </div>
                <div class="grid-container">
                    <div class="grid-item">
                        <img src="https://via.placeholder.com/150" alt="Post"/>
                        <div class="overlay">
                            <div class="overlay-content">
                                <div><FontAwesomeIcon className="action_icon" icon={faHeart} /> 120</div>
                                <div><FontAwesomeIcon className="action_icon" icon={faComment} /> 45</div>
                            </div>
                        </div>
                    </div>
                    <div class="grid-item">
                        <img src="https://via.placeholder.com/150" alt="Post"/>
                        <div class="overlay">
                            <div class="overlay-content">
                                <div><FontAwesomeIcon className="action_icon" icon={faHeart} />  98</div>
                                <div><FontAwesomeIcon className="action_icon" icon={faComment} /> 30</div>
                            </div>
                        </div>
                    </div>
                    <div class="grid-item">
                        <img src="https://via.placeholder.com/150" alt="Post"/>
                        <div class="overlay">
                            <div class="overlay-content">
                                <div><FontAwesomeIcon className="action_icon" icon={faHeart} />  75</div>
                                <div><FontAwesomeIcon className="action_icon" icon={faComment} /> 10</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile_page