import React from "react";
import Links from "./Links";
import {bio} from "../data/user"


function About({user, bio, github, linkedin }) {
  
  return (
    <div id="about">
       
      <h2>About Me</h2>
      {bio && {bio} !== "" && <p>{bio}</p>} 
    <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />;
      <Links github={github} linkedin={linkedin} />;
    </div>
  );
}

export default About;
