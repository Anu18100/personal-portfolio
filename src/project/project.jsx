import React, { Component } from "react";
import css from './project.css';
import img from './1.png';
import img1 from './2.jpeg';
import na from './na.png';
import pa from './pa.png';


class Project extends Component{
    render(){
        

        function slidup(){
            var pv = document.getElementsByClassName('a')[0];
            var pv1 = document.getElementsByClassName('a1')[0];
            if(window.screen.width <= 500)
            {
                pv1.style.display = 'none';
                pv.style.display = 'block';
            }
            else{
                pv1.style.display = 'none';
                pv.style.display = 'flex';
            }
        }

        function slidown(){
            var pv = document.getElementsByClassName('a')[0];
            var pv1 = document.getElementsByClassName('a1')[0];
            if(window.screen.width <= 500)
            {
                pv.style.display = 'none';
                pv1.style.display = 'block';
            }
            else{
                pv.style.display = 'none';
                pv1.style.display = 'flex';
            }
            
        }


        return(
            <div className="project" id='project'>
                <div className="pro-wrap">
                    <img src={pa} className="pa" id="pa" alt="" onClick={()=>slidup()}/>
                    <div className="proj-s">
                        <div className="a">
                            <div className="disp1">
                            This is my First web application using flask. <br />
                            For database I have used Sqlite.
                            <br />
                            <a className="vp1" href="https://github.com/Anu18100/Tour-Travels-management-systen" >View Project</a>
                            </div>
                            <div className="p1">
                                <div className="pback"></div>
                                <img src={img} alt="" className="project1" />
                            </div>
                        </div>
                        <div className="a1">
                        <div className="disp1">
                            This is my First web application using ReactJs. <br />
                            For database I have used Mysql database. <br />
                            For Bckend I have Used node.js
                            <br />
                            <a className="vp2" href="https://github.com/Anu18100/Video_chat-App" >View Project</a>
                            </div>
                            <div className="p1">
                                <div className="p2back"></div>
                                <img src={img1} alt="" className="project2" />
                            </div>
                        </div>
                    </div>
                    <img src={na} className="na" id="na" alt="" onClick={()=>slidown()}/>
                </div>
            </div>
            )
    }
}

export default Project;