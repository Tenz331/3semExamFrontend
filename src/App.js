import React, { useState,useEffect, Component } from "react"
import facade from "./apiFacade";
import test, {MyComponents,getNorris} from "./test";
import {button, Breadcrumb, Card, Form, Container, Row, Col,Table} from "react-bootstrap"
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BasicExample from "./Route";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
 
  const performLogin = (evt) => {
    console.log("log in")
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
  }
 
  return (
  <Container container-md>
    <div classname= "w-responsive text-center mx-auto p-3 mt-2">
     <Card classname="mb-3">
       <Card.Img width="70%" src="https://miro.medium.com/max/1000/1*TjDnfpnw4gI8sZ2fvaK9zg.jpeg"/>
       <Card.Body>
      <form classname="login-form" onChange={onChange}>
        <Card.Title>
                <h2>SolidCode startcode</h2>
        </Card.Title>
        <Card.Text>
        log ind på siden med det givet passward, og du kan læse ReadMe fanen for mere info om frontenden.
      </Card.Text>
                <div className="form-group">
                
                    <label>Username</label>
                    <input id="username" className="form-control" placeholder="User Name" />
                

                
                    <label>Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Password" />
                    
                </div>
                
                <button onClick={performLogin} className="btn btn-primary btn-block">Submit</button>
      </form>
      
      </Card.Body>
      </Card>
      </div>
    </Container>
  )
 
}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...")
  useEffect(
    () => {
    facade.fetchData().then(data=> setDataFromServer(data.msg));
  },
   [])
 
  return (
    <>
    
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
    <BasicExample/>
</>
  )
 
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
 
  const logout = () => { 
  facade.logout()
  setLoggedIn(false)
} 
  const login = (user, pass) => 
  {
    facade.login(user,pass)
    .then(res =>setLoggedIn(true));
   } 
 
  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
  )
 
 
}
export default App;
 
