import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log (user);



// component user was pass down to home 

function App() {
  
  return (
    <div>
      <NavBar/>
      <Home {...user} {...user.name}{...user.city}{...user.color}/> 
       <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}
 
export default App