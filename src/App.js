import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Profile from "./components/profile/Profile";
import Tabs from "./components/tabs/Tabs";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import DataContextProvider from "./store/DataContextProvider";

function App() {
  return (
    <DataContextProvider>
      <div className="main-app">
        <Profile />
        <div className="main-content">
          <Tabs />
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>
    </DataContextProvider>
  );
}

export default App;
