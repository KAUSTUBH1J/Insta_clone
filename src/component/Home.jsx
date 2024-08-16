import React, { useEffect, useState,useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from './context';
import { useSelector, useDispatch } from 'react-redux'
import Post from './post/frame';
import SuggestUser from './UserList/suggestedUserList'
import CSSLoader from "../functions/CSSLoader";

function Home() {
  const { isDarkMode } = useContext(ThemeContext);
  CSSLoader('assets/css/body.css');

  return (
    <>
      <div className=" main_body">
        <div class=" text-center">
          <div class="row">
            <div class="col posts_section  col-8">
              <Post/>    
              <Post/> 
              <Post/> 
              <Post/> 
              <Post/> 
            </div>
            <div class="col user_Suggestion_list col-4">
              <SuggestUser/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
