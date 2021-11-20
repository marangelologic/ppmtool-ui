import "./App.css";
import DashBoard from "./components/DashBoard";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <DashBoard />
      </div>
    </Router>
  );
}

export default App;
