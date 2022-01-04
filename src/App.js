import React, { Component } from "react";
import About from "./about/about";
import Cont from "./cont/cont";
import Edu from "./edu/edu";
import Intro from "./intro/intro";
import Nav from "./nav/nav";
import Project from "./project/project";


class App extends Component{
    render(){
        return(
            <>
            <Nav />
            <Intro />
           <About />

           <Edu />

           <Project/>
           <Cont />
           </>
        )
    }
}

export default App;