import { useState } from "react";


const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState();
  const[selectedNum,setSelectedNum] = useState()
  if(number == selectedNumber){
    return <greencard/>
  }else{
    return<redcard/>
  }
  
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { name, number };
    console.log(obj);

  }
  
  return(
      <div className="app">
          <h1> Welcome To Playing a Card Game</h1>
          <form onSubmit={handleSubmit}>
            <label>Enter Your Name:</label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Enter Number Between 0 to 10:</label>
            <input type="number" required value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button>Start</button>
            
            <button  >
      <h1> Click Counts: </h1>
      <h2>Player name is: </h2>
      <h3>Selected number is:</h3>
      <button class="card">  5</button>
      <button class="card">  7</button>
      <button class="card">4</button>
      <button class="card">  3</button>
      <button class="card">  2</button>
      <button class="card">   1</button>
      <button class="card"> 8</button>
      <button class="card"> 6</button>
      <button class="card">  9</button>
      
      </button>
      <button>Retry</button>
      <button>Exit</button>
            
            
          </form>
      </div>
      
  );
}
export default App;
