import "./App.css";
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";
import { useState, useEffect } from "react";

const App = () => {
  const [laptops, setLaptops] = useState(null);
  const [laptop, setLaptop] = useState(null);
  const [response, setResponse] = useState(null);
  const [filteredLaptop, setFilteredLaptop] = useState(null);

  const url = "/api/laptop";

  const getLaptop = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLaptops(data);

      console.log(laptops);
    } catch (error) {
      setResponse(false);
      //console.log(response)
    }
  };

  useEffect(() => {
    getLaptop();
  }, []);

  return (
    <div className="App">
      <h1>Laptops</h1>

      {laptops === null ? (
        <LoadingMask />
      ) : (
        
       <div> {laptops.map((laptop, index) => (
         <div className="laptop" key={index}>
          <Laptop
            key={index}
            laptop={laptop.name}
            brand={laptop.brand}
            weight={laptop.weight}
            
          /></div>
        ))}</div>
      )}
    </div>
  );
};

export default App;
