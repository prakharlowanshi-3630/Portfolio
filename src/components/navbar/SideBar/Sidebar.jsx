import Togglebutton from "./Togglebutton/Togglebutton"
import Link from "./Links/Link"
import "./sidebar.scss"
import {motion} from "framer-motion";
import { useState } from "react"
const Sidebar = () =>{
    const [open , setopen] = useState(false);
    const varients = {
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transtion : {
                ease: "linear",
                duration: 88,
                type:"spring",
                stiffness:100,
              
            },
            
            

        },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transtion:{
                delay:2,
                type:"spring",
                stiffness:400,
                damping:40,
            },
           
        },
    };
    
    return (
     <motion.div animate ={open ? "open":"closed"} className="sidebar">
     <motion.div  variants={varients} className="bg">
        <Link></Link>
     </motion.div>
      <Togglebutton setopen = {setopen} open ={open}></Togglebutton>
        </motion.div>
    )
}
export  default Sidebar