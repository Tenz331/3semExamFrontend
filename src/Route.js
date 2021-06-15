import "./style2.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
  import {MyComponent,Boats, GetHarbours, Starwars,CatFact}from "./test.js";

  export default function BasicExample() {
    return (
        <>
      <Router>
        <div>
          <ul className="header">
            <li>
            <NavLink exact activeClassName="selected" to="/">Home</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/Endpoint1">Owners</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/Endpoint2">Boats</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/Endpoint3">Harbours</NavLink>
            </li>-
            <li>
            <NavLink exact activeClassName="selected" to="/Endpoint4">Starwars ships</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/Endpoint5">Cat Fact</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/ReadMe">ReadMe</NavLink>
            </li>
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <div className="content"></div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Endpoint1">
              <Endpoint1 />
            </Route>
            <Route path="/Endpoint2">
              <Endpoint2 />
            </Route>
            <Route path="/Endpoint3">
              <Endpoint3 />
            </Route>
            <Route path="/Endpoint4">
              <Endpoint4 />
            </Route>
            <Route path="/Endpoint5">
              <Endpoint5 />
            </Route>
            <Route path="/ReadMe">
              <ReadMe />
            </Route>
          </Switch>
        </div>
      </Router>
      </>
    );
  }
  
  // You can think of these components as "pages"
  // in your app.
  
  function Home() {
    return (
      <div>
        <h2>Home</h2>
        <MyComponent/>
      </div>
    );
  }
  
  function Endpoint1() {
    return (
      <div>
        <h2>All persons</h2>
        <MyComponent/>
      </div>
    );
  }
  
  function Endpoint2() {
    return (
      <div>
        <h2>Boats</h2>
        <Boats/>
      </div>
    );
    }
  function Endpoint3() {
      return (
        <div>
          <h2>Random joke</h2>
          <GetHarbours/>
        </div>
      );
    }
    function Endpoint4() {
      return (
        <div>
          <h2>Starwars ships</h2>
          <Starwars/>
        </div>
      );
  }
  function Endpoint5() {
    return (
      <div>
        <h2>Cat fact</h2>
        <CatFact/>
      </div>
    );
  }
    function ReadMe() {
      return (
        <div>
          <h2>ReadMe</h2>
          <p>Der er 5 kald til 5 forskellige API´er som vi har hentet dataen fra (Link kan se forneden) ellers er front-end´en meget basic <br></br>
             alt du skal gør er at klikke på en af fanebladende og dataeb spyttes ud i en tabel.
          </p>

          <ul>
            <li>
              <p>Api til user i databasen</p>
              <a href="http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/all">http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/all</a>
            </li>
            <br></br>
            <li>
              <p>Dette er vores API som indeholder data fra 5 tilfældige API´er på nettet som er smidt sammen i et Array</p>
              <a href="http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/5endPoints">http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/5endPoints</a>
            </li>
          </ul>
        </div>
      );
}