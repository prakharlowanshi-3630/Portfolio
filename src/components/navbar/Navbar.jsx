import React from "react";
import "./navbar.scss";
import {motion} from "framer-motion";
import Sidebar from "./SideBar/Sidebar";
const Navbar = ()=>{
    return (
        <div className="navbar">
          {/* Side bar */}
        <Sidebar></Sidebar>
        
          <div className="wrapper">
            {/* Name */}
            <motion.span 
            initial = {{opacity:0 , scale:0.5}}  
            animate = {{opacity:1 , scale: 1}}
            transition={{duration:0.5}}
            >Prakhar Lowanshi</motion.span>

             {/* socialapp icons */}
            < motion.div  
            initial = {{opacity:0 , scale:0.5}}  
            animate = {{opacity:1 , scale: 1}}
            transition={{duration:0.5}}className="socialapp">
                <a href=""><img src="/facebook.png" alt="" /></a>
                <a href=""><img src="/instagram.png" alt="" /></a>
                <a href=""><img src="/youtube.png" alt="" /></a>
                <a href=""><img src="/dribbble.png" alt="" /></a>
            </motion.div>
          </div>

        </div>
    )
}
export default Navbar;