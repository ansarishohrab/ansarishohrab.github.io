import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Profile from "./components/profile/Profile";
import Tabs from "./components/tabs/Tabs";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [profile, setProfile] = useState();
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/profile/67aae65ad7095b256b370004`
      )
      .then((response) => {
        const profile = response.data;
        console.log(profile);
        setProfile(profile);
      })
      .catch((error) => {
        console.log(error);
        setProfile({});
      });
  }, []);
  return (
    <div className="main-app">
      <Profile profile={profile} />
      <div className="main-content">
        <Tabs />
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About profile={profile} />} />
          <Route path="/resume" element={<Resume profile={profile} />} />
          <Route path="/portfolio" element={<Portfolio profile={profile} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
