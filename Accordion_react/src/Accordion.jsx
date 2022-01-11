import React, { useState } from "react";
import "./accordion.css";
const Accordion = ({id}) => {
  const [state, setState] = useState(false);

  const icon = () => {
    setState(!state);
  };
  return (
    <>
      <div className="container">
        <div className="heading" onClick={icon}>
          <div>
            <h1>Question &nbsp; {id}</h1>
          </div>
          <div>
            <span>{state ? "➖" : "➕"}</span>
          </div>
        </div>
        {state
              ? <div className="content"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              </p></div>: ""}
        
      </div>
    </>
  );
};
export default Accordion;
