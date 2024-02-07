import React from "react";
import "./service.scss";
import {animate, motion} from "framer-motion";
const Service = ()=>{
    const textVariants = {
        initial:{
            x:-500,
            y:100,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            y:0,
            transition:{
                duration:0.7,
                staggerChildren:0.1,
            },
        }, 
    };
    return(
        <motion.div className="service" variants={textVariants} initial="initial" whileInView="animate" >
         <motion.div className="textcontainer" variants={textVariants}>
           <p> I focus on your brand growth
            <br/> and more forward</p>
            <hr/>
            
        </motion.div> 
         <motion.div className="titlecontainer" variants={textVariants}>
            <motion.div className="title">
            <img src="people.webp" alt="" />
            <h1>
                <b>Unique</b> Ideas
            </h1>
        </motion.div>  
        <motion.div className="title">
            <h1>
                <b>For Your</b> MERN
            </h1>
            <button>WHAT I DO?</button>
        </motion.div>    
         </motion.div> 
         <motion.div className="cards" variants={textVariants}>
             <motion.div className="box" whileHover={{background:"lightgray" ,color:"black"}}>
                <h2>React Js</h2>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quam ad illo velit mollitia repudiandae quis sed dolorem amet pariatur.
                </p>
                <button>Go</button>
             </motion.div>
             <motion.div className="box" whileHover={{background:"lightgray" ,color:"black"}}>
                <h2>Tailwind</h2>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quam ad illo velit mollitia repudiandae quis sed dolorem amet pariatur.
                </p>
                <button>Go</button>
             </motion.div>
             <motion.div className="box" whileHover={{background:"lightgray" ,color:"black"}}>
                <h2>DSA</h2>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quam ad illo velit mollitia repudiandae quis sed dolorem amet pariatur.
                </p>
                <button>Go</button>
             </motion.div>
             <motion.div className="box" whileHover={{background:"lightgray" ,color:"black"}}>
                <h2>Node Js</h2>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quam ad illo velit mollitia repudiandae quis sed dolorem amet pariatur.
                </p>
                <button>Go</button>
             </motion.div>
            </motion.div> 
            
        </motion.div>
    )
}
export default Service;