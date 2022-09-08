import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  // const [arr, setArr]= useState([])
  // var arr= []

  const fetchData = () => {
    let x = Math.floor(Math.random() * 10);
    console.log(x);
    fetch(`https://swapi.dev/api/people/${x}`)
      .then((response) => {
        //  console.log(response)
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // localStorage.setItem('name' , data)
        // arr.push(data)
        setData(data);
        // setArr([...arr, data])
      });
  };

  return (
    <div>
      <button onClick={fetchData}> ADD </button>
      <h1> Name</h1>
      <p> {data.id}</p>
      <p> {data.name}</p>
      {/* {localStorage.getItem(data)} */}
    </div>
  );
}
