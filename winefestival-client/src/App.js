import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/HomePage";
import { LoginPage } from "./pages/loginpage/LoginPage";
import { EventsPage } from "./pages/eventspage/EventsPage";
import { AboutPage } from "./pages/aboutpage/AboutPage";

function App() {
  return (
    <div className="appContainer">
      <Switch>
        <Route exact path="/" component={HomePage} />

        {/* Routes from Home page */}
        <Route path="/login" component={LoginPage} />
        <Route path="/evetnspage" component={EventsPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
