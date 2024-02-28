import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(){
  return <img className='avatar'src='puspa1.jpeg' alt='Puspa Chauhan' height='500' width='500'/>

}
function Intro(){
  return(
<div>
  <h1> Puspa Chauhan</h1>
  <p>
I have been working as a web developer for quite some time now.  My skills include HTML, CSS, JavaScript, ReactJS, NodeJS
  </p>
</div>
  );
}

function SkillList(){

}
function Skill(){

}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
