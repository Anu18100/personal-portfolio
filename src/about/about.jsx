import React, { Component } from "react";
import css from './about.css';
import me from './me.jpg';

class About extends Component{
    render(){
        var i;
        function entera(){
            i+=1;
            if(i>=1){
            }else{
                var ani = document.getElementsByClassName('right-wrap')[0];
                var ani1 = document.getElementsByClassName('left-wrap')[0];

                ani.style.animation = 'after 5s 1';
                ani1.style.animation = 'afteri 5s 1';
            }
        }
        return(
            <div className="about" id="about" onMouseEnter={()=>entera()}>
                <div className="a-con">
                    <div className="a-left">
                        <div className="left-wrap">
                            <h1>About me</h1>
                            <span className="me">
                                 I was born and raised in Mumbai.
                                 I completed my SSC and HSC from Guru Nanak Higher Secondary School 
                                 And Junior College. 
                                 I am currently pursuing my engineering degree at 
                                 Vashantdad Patil Prathisthan's College Of Engineering.</span>
                            <div className="hc">
                                <div className="hobbies"><h2>Hobbies:</h2><ol><li>Playing chess</li>
                                    <li>listening Songs</li>
                                    <li>Prgramming</li></ol>
                                </div>

                                <div className="technical">
                                    <h2>Technical</h2>
                                    <ul>
                                        <li>C Programming</li>
                                        <li>PHP</li><li>Python</li><li>ReactJs</li>
                                        <li>Flask</li>
                                    </ul>
                                </div>

                                <div className="tec">
                                    <h2>Skills:</h2>
                                    <ul>
                                    <li>Java</li><li>HTML</li><li>CSS</li>
                                        <li>JavaScript</li><li>Node.js</li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="a-right">
                        <div className="right-wrap">
                            <div className="backcolver"></div>
                            <div className="img">
                                <img className="me" src={me} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;