import React, { useState,useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {button, Breadcrumb, Card, Form, Container, Row, Col,Table} from "react-bootstrap"
  
  function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
 
    useEffect(() => {
      fetch("http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/all")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <container className="themed-container" fluid="md">
        <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
          <th scope="col">#ID</th>
             <th scope="col">Name</th>
             <th scope="col">Address</th>
             <th scope="col">Phone</th>
        </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <>
          <tr >  
            <td key={item.dtoOwnerid}>
            {item.dtoOwnerid}
            </td>
            <td>{item.dtoName}</td>
            <td>{item.dtoAddress}</td>
            <td>{item.dtoPhone}</td>
            </tr>
           </>
          ))}
          </tbody>
          </Table>
          </container>
      );
    }
  }
  

  function Boats() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [boats, setBoats] = useState([]);
    const [dtobrand, setBrand] = useState("");
    const [dtomake, setMake] = useState("");
    const [dtoboatName, setName] = useState("");
    const [dtoimage, setImage] = useState("");
    const [boatid, setBoatid] = useState("");
 
    useEffect(() => {
      fetch("http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/boats")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            setBoats(result)
            setBrand(result[0].dtobrand)
            setMake(result[0].dtomake)
            setName(result[0].dtoboatName)
            setImage(result[0].dtoimage)
            setBoatid(result[0].dtoid)
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    
    function deleteBoat(dtoid){
      fetch(`http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/boats/${dtoid}`,{
        method: `DELETE`
      }).then((result) =>{
        result.json().then((resp)=>{
          console.log(result)
        })
      })
    }
    function SelectBoat(dtoid){
      console.warn("function called",boatid[dtoid-1])
      let item=boats[dtoid-1]

      setBrand(item.dtobrand)
      setMake(item.dtomake)
      setName(item.dtoboatName)
      setImage(item.dtoimage)
      setBoatid(item.dtoid)
    }

    function updateBoat(){
      let item={dtobrand,dtomake,dtoboatName,dtoimage}

      console.warn("item",item)
      fetch(`http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/edit/${boatid}`,{
        method: `PUT`,
        headers: {
          "Accept": `application/json`,
          "Content-Type": `application/json`
        },
        body:JSON.stringify(item)
      }).then((result) =>{
        result.json().then((resp)=>{
          console.log(result)
        })
      })
    }


    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
        <div>
          <input type="number" placeholder="Search by Harbour ID"/>

        </div>

        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Brand</th>
            <th scope="col">Make</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">harbour ID</th>
            <th scope="col">Option</th>

          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <>
          <tr>  
            <td key={item.dtoid}>{item.dtoid}</td>
            <td>{item.dtobrand}</td>
            <td>{item.dtomake}</td>
            <td>{item.dtoboatName}</td>
            <td>{item.dtoimage}</td>
            <td>{item.dtoHarbourid}</td>
            <td><button onClick={()=>deleteBoat(item.dtoid)}>Delete</button></td>
            <td><button onClick={()=>SelectBoat(item.dtoid)}>Update</button></td>
          </tr>
           </>
          ))}
          </tbody>
          </Table>

          <div>
            <input type="text" value={dtobrand} onChange={(e)=>{setBrand(e.target.value)}}/>  <br></br>
            <input type="text"value={dtomake} onChange={(e)=>{setMake(e.target.value)}}/>  <br></br>
            <input type="text"value={dtoboatName} onChange={(e)=>{setName(e.target.value)}}/>  <br></br>
            <input type="text"value={dtoimage} onChange={(e)=>{setImage(e.target.value)}}/>  <br></br>
            <button onClick={updateBoat} >Update Boat</button>
          </div>
          </>
      );
    }
  }
  
  
  function GetHarbours() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
 
    useEffect(() => {
      fetch("http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/harbours")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name </th>
            <th scope="col">Address</th>
            <th scope="col">Capacity</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <>
          <tr>  
            <td key={item.dtoHarbourid}>{item.dtoHarbourid}</td>
            <td>{item.dtoHarbourName}</td>
            <td>{item.dtoHarbourAddress}</td>
            <td>{item.dtoCapacity}</td>
          </tr>
           </>
          ))}
          </tbody>
          </Table>
      );
    }
  }


  function Starwars() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
 
    useEffect(() => {
      fetch("http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/5endPoints")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Model</th>
            <th scope="col">Manufacturer</th>
            <th scope="col">Cost_in_credits</th>
            <th scope="col">Length</th>
            <th scope="col">Crew</th>
            <th scope="col">Hyperdrive_rating</th>
            <th scope="col">Pilots</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <>
          <tr>  
            <td key={item.starWarsShip_INFO.name}>{item.starWarsShip_INFO.name  }</td>
            <td key={item.starWarsShip_INFO.model}>{item.starWarsShip_INFO.joke}</td>
            <td key={item.starWarsShip_INFO.manufacturer}>{item.starWarsShip_INFO.manufacturer}</td>
            <td key={item.starWarsShip_INFO.cost_in_credits}>{item.starWarsShip_INFO.cost_in_credits}</td>
            <td key={item.starWarsShip_INFO.length}>{item.starWarsShip_INFO.length}</td>
            <td key={item.starWarsShip_INFO.crew}>{item.starWarsShip_INFO.crew}</td>
            <td key={item.starWarsShip_INFO.hyperdrive_rating}>{item.starWarsShip_INFO.hyperdrive_rating}</td>
            <td key={item.starWarsShip_INFO.pilots}>{item.starWarsShip_INFO.pilots}</td>
          </tr>
           </>
          ))}
          </tbody>
          </Table>
      );
    }
  }

  function CatFact() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
 
    useEffect(() => {
      fetch("http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/5endPoints")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Info</th>
            <th scope="col">CreatedAt</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <>
          <tr>  
            <td key={item.catFact._id}>{item.catFact.id}</td>
            <td>{item.catFact.text}</td>
            <td>{item.catFact.createdAt}</td>
          </tr>
           </>
          ))}
          </tbody>
          </Table>
      );
    }
  }


  export {Boats};
  export {MyComponent};
  export {GetHarbours};
  export {Starwars};
  export {CatFact};

