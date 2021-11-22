import "./App.css";
import DashBoard from "./components/DashBoard";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProject from "./components/project/AddProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/addProject" element={<AddProject />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
