import React, { Component } from "react";
import css from './into.css'; 

class Intro extends Component{
    render(){
        
        return(
            <div className="intro-container" id='home'>
                <div className="i-wrap">
                    <div className="left">
                        <div className="shapec">
                            <div className="lshape"></div>
                            <div className="mshape"></div>
                            <div className="rshape"></div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="r-wrap">
                            <span className="hedi">Hello, I'm </span><br />
                            <span className="name">Anubhav Shukla</span>
                            <br />
                            <h2>I'm intersted in,</h2>
                            <div className="item">
                                <div className="item-wrap">
                                    <span className="items">UI Developer</span>
                                    <span className="items">Web Developer</span>
                                    <span className="items">Backend Developer</span>
                                    <span className="items">AI Developer</span>
                                    <span className="items">Full Stack Developer</span>
                                </div>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro;