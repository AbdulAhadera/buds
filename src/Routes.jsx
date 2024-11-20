import React from 'react';
import { Routes, Route, Navigate, } from "react-router-dom";
import HomePage from './Pages/HomePage'; 
import News from './Pages/News';
import Events from './Pages/Events';
import TeamMembers from './Pages/TeamMembers'

const Router = () => {
  return (
    <div>
      <Routes>
            <Route path="/" element={<HomePage   />} />
            <Route path="/news" element={<News   />} />
            <Route path="/bu-events" element={<Events   />} />
            <Route path="/team" element={<TeamMembers   />} />
        </Routes>
    </div>
  )
}

export default Router;