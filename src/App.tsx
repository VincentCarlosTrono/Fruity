import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import NewProducts from "./Components/NewProducts";
import Extra from "./Components/Extra";
import AllProducts from "./Components/AllProducts";
import Footer from "./Components/Footer";
import MainFooter from "./Components/MainFooter";
import Copyright from "./Components/Copyright";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Body />
        <NewProducts />
        <Extra />
        <AllProducts />
        <NewProducts />
        <Footer />
        <MainFooter />
        <Copyright />
      </header>
    </div>
  );
}

export default App;
