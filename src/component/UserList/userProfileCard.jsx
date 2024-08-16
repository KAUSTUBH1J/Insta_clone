import React from "react";
import profile from '../../image/blank-profile-picture.png';
import CSSLoader from "../../functions/CSSLoader";

function UserProfileCard(props){
    
    return(
        <>
            <div>
                <div className="d-flex post_up justify-content-between ">
                    <div className="d-flex">
                        <div className="profile_image_cantaier">
                            <img src={profile}  className="post_profile_img"/>
                        </div>
                        <div className="username_container">
                            <p>{props.userName}</p>
                        </div>
                    </div>
                    <div>
                        <span className="follow_btn">Follow</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfileCard