import { FaSearchLocation } from "react-icons/fa";
import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal"

function App() {
  const [data, setData] = useState('sorocaba')
  const [weather, setWather] = useState("")
  const [OpenModal, setOpenModal] = useState(false)

  function handleClick () {
     searchcity()

  }


    const searchcity = async () =>{
      fetch(`http://api.weatherapi.com/v1/current.json?key=ee2c831fca2f4dc0928144218232101&q=${data}&aqi=no`).then((response) =>{
        
      if(response.status === 200 ){
        return response.json();
      }
      else{
        setOpenModal(true)
      }
      }).then((data)=>{
        setWather(data)
      })
      
    }

 
  return (
    <div className="App">
      <Modal isOpen={OpenModal} setModalOpen={() => setOpenModal(false)}/>
      <div className="container-title">
           <h1>consultar temperatura</h1>
      </div>
      
      <div className="container-input">
          <div className="input">          
                <input type="text" placeholder="Cidade" onChange={((e) => setData(e.target.value))}/>
          </div>
          <div className="container-icon">
                <button type="submit" onClick={handleClick}>
                    <FaSearchLocation />
                </button>
          </div>
      </div>   
      
      {
       weather ? (
              <div className="container-anwser">
              <div className="answer-items">
                  <h1>Temperatura: {weather.current.temp_c} ºC</h1>
                  <h2>Cidade: {weather.location.name}</h2>
                  <h2>Estado: {weather.location.region}</h2>
                  <h1>{weather.current.condition.text}</h1>
                  <img src={weather.current.condition.icon}/>
               </div>
          </div>

       ): null
       
      }
     </div>

       
     
  );
}

export default App;
