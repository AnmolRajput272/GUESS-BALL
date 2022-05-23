import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUp from "./components/UserSignup";
import Login from "./components/UserLogin";
import UserDashboard from "./components/UserDashboard";
import PlayerHistory from "./components/PlayerHistory";
import GeneralLeaderboard from "./components/GeneralLeaderboard";
import UserProfile from "./components/UserProfile";
import NavbarDB from "./components/NavbarDB";
import Selection from "./component2/Selection";
import Templogin from "./component2/Templogin";
import AdminDashboard from "./component2/AdminDashboard";
import GameCard from "./components/Gamecard";
const App: React.FC = () => {
  localStorage.setItem('server','https://1677bb5f9f2642.lhrtunnel.link');
  localStorage.setItem('score','0');
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
          <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/userdashboard" element={<UserDashboard/>} />
            <Route path="/playerhistory" element={<PlayerHistory/>} />
            <Route path="/generalleaderboard" element={<GeneralLeaderboard/>} />
            <Route path="/userprofile" element={<UserProfile/>} />
            <Route path="/watchnplay" element={<Selection/>} />
            <Route path="/admindashboard" element={<AdminDashboard/>} />
            {/* <Route path="/gamecard" element={<GameCard/>} /> */}
          </Routes>
        </div>
      </BrowserRouter>
  );
};

export default App;