// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from 'react'
import Alert from "./component/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <div className="container my-3">
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
          {/* <Switch>
            <Route path="/about">
              <About mode={mode}/>
            </Route>
            <Route> */}
              <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About mode={mode}/>
            </Route>
            <Route>
              <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router> */}
    </>
  );
}

export default App;
