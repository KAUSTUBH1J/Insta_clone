import React,{useContext} from "react";
import { ThemeContext } from '../context';
import { hatch } from 'ldrs';
import CSSLoader from "../../functions/CSSLoader";

const Loader = () =>{
    CSSLoader('assets/css/loader.css')
    const { isDarkMode } = useContext(ThemeContext);
    const mystyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#d7d7d791',
        position: 'relative'
      };
    
        
    
    // quantum.register()
    hatch.register()
    return (
        <>
            <div className={` bg-${isDarkMode ?'dark':''}`} style={mystyle}>
                {/* <div class="loader"></div> */}
                {/* <l-quantum
                size="100"
                speed="1.75" 
                color={isDarkMode ?'white':'black'}
                ></l-quantum> */}


                <l-hatch
                size="28"
                stroke="4"
                speed="3.5" 
                color={isDarkMode ?'white':'black'}
                ></l-hatch>
            </div>
           
        </>
    )
}

 export default Loader




// Default values shown
