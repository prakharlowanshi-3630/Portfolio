import React, { useRef } from "react";

import "./portfolio.scss";
import {motion ,useScroll,useSpring, useTransform} from "framer-motion";
 
const items =[
    {
        id:1,
        title:"React commerce",
        link:"https://shopping-cart-tawny-seven.vercel.app/",
        img:"Ecomm.png",
        desc:" Seamless shopping experience: Browse, compare, and purchase products online. Secure transactions, wide selection, and fast delivery. Your one-stop destination for all your shopping needs."

    },
  
    {
        id:2,
        link:"https://towerhanoi-mu.vercel.app/",
        title:"Tower Of Hanaoi",
        img:"Tower.png",
        desc:" Classic puzzle game: Strategically move disks between three pegs, ensuring smaller disks rest atop larger ones. Test your logic and patience with this timeless brain-teaser"
    },
    {
        id:3,
        title:"Bugeto",
        link:"https://towerhanoi-51hs.vercel.app/",
        img:"B.png",
        desc:"Digital marketing: Harness the power of online platforms to reach, engage, and convert your target audience. Drive brand awareness, generate leads, and optimize ROI with strategic digital campaigns."
    },
    ,
    {
        id:4,
        title:"Random GIF Genrator",
        link:"https://random-gi-fgenrator.vercel.app/",
        img:"random.png",
        desc:"GIF generator: Create captivating animations in seconds. Choose from a vast library or upload your own images to express emotions, share moments, and enhance digital communication effortlessly"
    }
]
 function Clickhandler(){

 }
const Single = ({item})=>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref , offset :["start start" , "end start"]});
    const y = useTransform(scrollYProgress,[0 ,1],["0%","-300%"]);
    return(
        <section ref={ref}>
         
       <div className="container">
       <div className="wrapper">
       <img src={item.img} alt="" />
         <motion.div className="textcontainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>See</a>
            
         </motion.div>
       </div>
       </div>
        </section>
    )
}
const Portfolio =()=>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref , offset :["end end" , "start start"]});
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });
    
    return(
        <div className="Portfolio" ref={ref}>
            <div className="progress">
             <h1> Featured Works</h1>
             <motion.div className="progressbar" style={{ scaleX }}></motion.div>
            </div>
          {
            items.map(item =>(<Single item ={item} key={item.id}/>)) 
          }
        </div>
    )
}
export default Portfolio;