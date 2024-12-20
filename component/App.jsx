import React, { useRef } from "react";
import {Routes, Route} from "react-router-dom";
import Nav from "./nav";
import Page from "./page";
import Logo from "./logo";
import About from "./About";
import Skills from "./skills";
import Divider from "./divider";
import Project from "./project";
import ContactForm from "./ContactForm";
import Comment from "./Comment";
import SkillsArray from "./Skillserray";
import Final from "./skillsFinal";
import Footer from "./footer";



function App(){
 
  

    return(
      <div id="main-container">
       
       <div id="main-content">

         <Nav/>
         <Routes>
             <Route path="/home" element={<Page />}/>
             <Route path="/about" element={ <About/>}/>
             <Route path="/project" element={ <Project/>}/>
             <Route path="/contact" element={<ContactForm/>}/>
         </Routes>
         
       </div>
       
       <Comment />
       <Footer />
      
        
      </div>
    )
}

export default App;

