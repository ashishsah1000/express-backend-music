import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/structure/navbar/Nav";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import React from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Home from "./pages/Home/Home";
import Focus from "./apps/focus/Focus";

function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        <div className="aspire">
          <BrowserRouter>
            <Grid container>
              <Grid item md={2} lg={1}>
                <div className="side">
                  <Routes>
                    <Route
                      path="/a/focus"
                      element={
                        <Nav
                          dashboard="Focus"
                          getStarted="Records"
                          analysis="Analyisis"
                          addNew="New Task"
                          pro="Go Pro"
                        />
                      }
                    />
                    <Route
                      path="/home"
                      element={
                        <Nav
                          dashboard="Dashboard"
                          getStarted="Get Started"
                          analysis="Analyisis"
                          addNew="Add New"
                          pro="Go Pro"
                        />
                      }
                    />
                  </Routes>
                </div>
              </Grid>
              <Grid item md={10} lg={11}>
                <div className="body">
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/a/focus" element={<Focus />} />
                  </Routes>
                </div>
              </Grid>
            </Grid>
          </BrowserRouter>
        </div>
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
