import React from "react";
import "./contact.scss";
const Contact = ()=>{
    return(
        <div className="contact">
          <div className="textcontainer">
            <h1>Let's Work together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>prakharlowanshi@gmail.com</span>
            </div>
            <div className="item">
                <h2>Address</h2>
                <span>Narmadapuram ,MP</span>
            </div>
            <div className="item">
                <h2>Phone No.</h2>
                <span>7999221229</span>
            </div>

          </div>
          <div className="fromcontainer">
            <form action="">
             <input type="text"  required  placeholder="Name"/>
             <input type="email"  required  placeholder="Email"/>
             <textarea name="" placeholder="message" rows="8"></textarea>
             <button>Submit</button>
            </form>
          </div>
            
        </div>
    )  
}
export default Contact;