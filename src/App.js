import React, { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [selectedNum, setSelectedNum] = useState(0);
  const [count, setCount] = useState(0);
  const [numArr, setNumArr] = useState([1,2,3,4,5,6,7,8,9]);

  
  
   const randomNum = () => {
    let n = numArr.sort(() => Math.random()-0.5);
    console.log("Random Num", numArr);
    setNumArr(n);
  };
  
  
 const [isForm,setIsForm]=useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { name, number };
    console.log(obj);
    setIsForm(false)
  };

  useEffect(() => {
    randomNum();
  },[]);


  return (
    <div className="app">
      <h1> Welcome To Playing a Card Game</h1>
      <div>
        {
          isForm?(<> {" "} <form onSubmit={handleSubmit}>
            <label>Enter Your Name:</label>
            <input
            
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Enter Number Between 1 to 9:</label>
            <input
              type="number"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button  className="start" type="submit">Start</button>
            </form>
    </>):(<> <div> {" "}
        <h2>
          You Have Only 3 Attempt To Win The Game!!!!
        </h2>
        <br></br>
        <h4> Click Counts: {count}</h4>
          <h4>Player name is: {name} </h4>

        <button>
          { selectedNum == number?(
            <h3> Congratulations, You Won!!!</h3>
          ):(
            count==3 && <h2>You Lose!!!</h2>
          )}
          
          {numArr.map((item) => (
            <button
              class={`card
               ${
                 selectedNum == item && selectedNum == number
                   ? "greencard"
                   : selectedNum != item
                   ? ""
                   : "redcard"
               }`}
              onClick={() => {
                if(count<3) {
                setSelectedNum(item);
                setCount(count + 1);
                } 
                
              }}
            >
              <span> {selectedNum == item && item}</span>
            </button>
          ))}
          {}
        </button>
        <button className="retry"
          onClick={() => {
            setSelectedNum();
            setCount(0);
            randomNum();
            
          }}
        >
          Retry
        </button>
        <br></br>
        <button className="exit"
          onClick={() => {
            setName("");
            setNumber("");
            setSelectedNum();
            setCount(0);
            setIsForm(true);
            randomNum();
          }}
        >
          Exit
        </button>
        </div>
        </>
        )}
        </div>
     </div>
  );
};
export default App;