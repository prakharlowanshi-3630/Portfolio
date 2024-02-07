
import "./hero.scss";
import {motion} from "framer-motion";
const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    }, 
};
const SliderVariants = {
    initial:{
        x:0,
    
    },
    animate:{
        x:"-220%",
        
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
            staggerChildren:0.1,
        },
    }, 
};


const Hero = ()=>{

    
    
    return (
        <div className="hero">
            <div className="wrapper">
               <motion.div className="textcontainer" variants={textVariants } initial="initial" animate="animate">
                <motion.h2  variants={textVariants } >PRAKHAR LOWANSHI</motion.h2>
                <motion.h1  variants={textVariants }>WEB DEVELOPER AND UI DESIGNER</motion.h1>
                <motion.div className="buttons"  variants={textVariants }>
                    <motion.button  variants={textVariants }>See the latest work</motion.button>
                    <motion.button  variants={textVariants }>Contact Me</motion.button>
                </motion.div>
                </motion.div>
            </div>
            <motion.div className="slidingtextcontainer" variants={SliderVariants} initial ="initial" animate ="animate">
                Full Stack Web Developer
            </motion.div>
            <div className="imgcontainer">
                <img src="" alt=""></img>
            </div>

        </div>
    )
}
export default Hero;