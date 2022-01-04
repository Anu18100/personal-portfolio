import React, { Component } from "react";
import css from './cont.css';
import copy from './copy.png';
import mail from './mail.png';
import insta from './insta.png';
import face from './face.png';
import twit from './twit.png';



class Cont extends Component{
    render(){
        return(
            <div className="contact">
                <div className="up">
                    <div className="mail-c">
                        <img src={mail} className="mail" alt="" /> <span className="email">anubhavrshukla326@gmail.com</span>
                     </div>

                     <div className="social">
                         <img src={insta} alt="" className="med"/>
                         <img src={face} alt="" className="med"/>
                         <img src={twit} alt="" className="med"/>
                     </div>
                </div>
                <div className="down">copyright &nbsp;<img src={copy} className="copy" alt="" />&nbsp; 2022 | all rights are reserved</div>
            </div>
        )
    }
}

export default Cont;