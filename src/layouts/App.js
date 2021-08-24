import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Navigation from "./Navigation";
import Section from "./Section";
import Footer from "./Footer";
import SideDrawer from "../components/SideDrawer";
import Backdrop from "../components/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  handleClickSideDrawer = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClick = () => {
    this.setState({
      sideDrawerOpen: false,
    });
  };
  render() {
    let backdrop = null;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClick} />;
    }
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          {backdrop}
          <main>
            <aside>
              <Navigation toggleClick={this.handleClickSideDrawer} />
              <SideDrawer show={this.state.sideDrawerOpen} />;
              <Footer />
            </aside>
            <section className="page">
              <Section />
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
