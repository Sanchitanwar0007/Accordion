import React, { useEffect, useState } from "react";
import "./accordion.css";
let data = [
  {
    Question: "What is React?",
    Answer:
      "React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach.",
  },
  {
    Question: "What is useState() in React?",
    Answer:
      "The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.",
  },
  {
    Question: "What is JSX?",
    Answer:
      "JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).",
  },
  {
    Question:
      "What are the differences between functional and class components?",
    Answer:
      "Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on a feature basis. After the introduction of Hooks, functional components are equivalent to class components.",
  },
];
var j=0;
const Accordion = () => {
  const [state, setState] = useState([]);
  const [prevState,setPreState]=useState();
  useEffect(()=>{
    const arr=[];
    for(let i=0;i<data.length;i++){
      arr.push(false);
    }
    setState(arr)
  },[])
  const icon = (id) => {
    state[prevState]=false;
    state[id]=true;
    setPreState(id);
  };
  return (
    <>
    {data.map((curr,id)=>{
      return (<div className="container">
        <div className="heading" onClick={()=>icon(id)}>
          <div>
            <h1>{curr.Question}</h1>
          </div>
          <div>
            <span>{state[id] ? "➖" : "➕" }</span>
          </div>
        </div>
        {state[id]
              ? <div className="content"><p>{curr.Answer}
              </p></div>: ""}
      </div>
    )})}
    </>
  );
};
export default Accordion;
