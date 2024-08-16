import React, {useContext} from "react";
import profile from '../../image/pexels-photo-771742.jpeg';
import CSSLoader from "../../functions/CSSLoader";
import { ThemeContext } from '../context';
import UserPorfileCard from './userProfileCard';

function UserList(){
    const { isDarkMode } = useContext(ThemeContext);
    CSSLoader('assets/css/suggestedUserlist.css');
    return(
        <>
            <div className="Side_suggestion"  style={{ color: isDarkMode ? '#fff':'#000' }}>
                <div className="d-flex post_up ">
                    <div className="profile_image_cantaier">
                        <img src={profile}  className="post_profile_img"/>
                    </div>
                    <div className="username_container">
                        <p>Kaustubh.jadhav</p>
                        <span>kautubh jadhav</span>
                    </div>
                </div>
                <div className="text-start">
                    <span className="ml-2 suggested_text"  style={{ color: isDarkMode ? '#fff':'#000' }}>
                        Suggested For You
                    </span>
                </div>
                <div>
                    <UserPorfileCard userName = "vishnu"/>
                    <UserPorfileCard userName = "nayu_0710"/>
                </div>
            </div>
        </>
    )
}

export default UserList