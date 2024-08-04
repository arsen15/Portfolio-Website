import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <Layout>
      <Home />
      <Experience />
      <Contact />
    </Layout>
  );
}

export default App;
