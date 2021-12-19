import "./App.css";
import { Switch, Route } from "react-router-dom";
import Admin from "./component/Admin/Admin";
import Logn from "./component/Login/Logn";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function func1() {}
    func1();
  }, []);

  return (
    <div>
      {/* <h1>Hello</h1> */}
      <Switch>
        <Switch>
          <Route exact path="/">
            <Logn />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>{" "}
      </Switch>
    </div>
  );
}

export default App;
