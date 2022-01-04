import React, { Component } from "react";
import css from './nav.css';
import home from './home.png';
import about from './about.png';
import edu from './edu.png';
import pro from './pro.png';

class Nav extends Component{
    render(){
        return(
            <div className="nav">
                <div className="nav-wrap">
                    <div className="links">
                        <div className="link-c">
                            <a className="link" href="#home"><img src={home} alt="" className="home" /></a>
                            <span>Home</span>
                        </div>
                        <div className="link-c">
                            <a className="link" href="#about"><img src={about} alt="" className="home" /></a>
                            <span>Anout Me</span>
                        </div>
                        <div className="link-c">
                            <a className="link" href="#edu"><img src={edu} alt="" className="home" /></a>
                            <span>Educaion</span>
                        </div>
                        <div className="link-c">
                            <a className="link" href="#project"><img src={pro} alt="" className="home" /></a>
                            <span>Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav;