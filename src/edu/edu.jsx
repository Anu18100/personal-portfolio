import React, { Component } from "react";
import css from './edu.css';


class Edu extends Component {
    render() {
        var i;
        function enter(){
            i+=1;
            if(i>=1){
            }else{
                var ani = document.getElementsByClassName('ssper')[0];
                var ani1 = document.getElementsByClassName('hsper')[0];
                var ani2 = document.getElementsByClassName('beper')[0];

                ani.style.animation = 'ssbar 5s 1';
                ani1.style.animation = 'hsbar 5s 1';
                ani2.style.animation = 'bebar 5s 1';
            }
        }
        return (
            <div className="education" id='edu' onMouseEnter={()=>enter()}>
                <div className="edu-wrap">
                    <div className="l-edu">
                        <h1>My Education Details</h1>
                        <div className="ssc">
                            <div className="e-i">
                                <label htmlFor="sscb">SSC</label>
                                <label >From: GURU NANAK HIGHER SECONDARY SCHOOL AND JR. COLLEGE</label>
                                <label >Passing Year : 2017</label>
                            </div>
                            <div className="sscb" id="sscb">
                                <div className="ssper">78%</div>
                            </div>
                        </div>
                        <div className="ssc"><div className="e-i">
                            <label htmlFor="sscb">HSC</label>
                            <label>From: GURU NANAK HIGHER SECONDARY SCHOOL AND JR. COLLEGE</label>
                            <label >Passing Year : 2019</label>
                        </div>
                            <div className="sscb" id="sscb">
                                <div className="hsper">74.77%</div>

                            </div>
                        </div>
                        <div className="ssc">
                            <div className="e-i">
                                <label htmlFor="feb">Dgree Agregate Percentage</label>
                                <label>From : Vasantdada Patil Pratishthan's College of Engineering</label>
                                <label >Passing Year : 2023</label>
                            </div>
                            <div className="sscb" id="sscb">
                                <div className="beper">75.49%</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}

export default Edu;