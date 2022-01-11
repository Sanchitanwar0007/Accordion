import './App.css';
import Accordion from "./Accordion.jsx"
function App() {
  const random=Math.floor(Math.random() *10);
  const arr=[];
  for(let i=0;i<random;i++){
    arr.push(i);
  }
  return (
    <>
    <div className='main'>
    {
      arr.map((index,ele)=>{
        return <Accordion id={index}  />
      })
    }
    
    </div>
    </>
    
  );
}

export default App;
