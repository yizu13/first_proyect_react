import { useState} from "react";





function App() {
  const nombre = "Jesús";
  const [num, setNum] = useState(1);
  
  const sumar = () => {
    setNum(num + 1)
  }; 

  const [input, setInput] = useState("");

  const handleInput = (Event) =>{
    const value = Event.target.value;
    setInput(value);
  }


  return (
      <div className="App">
        <h1>hello {nombre}</h1>
        <button onClick={sumar}>Press here to add 1</button>
        <p>{num}</p>

        <input onChange={handleInput}/>
        <p>{input}</p>
      </div>
  )
}

export default App
