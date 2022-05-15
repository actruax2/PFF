import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import News from './pages/News/News'
import League from './pages/League/League'
import Teams from './pages/Teams/Teams'
import Admin from './pages/Admin/Admin'
import Profile from './pages/Profile/Profile'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="news" element={<News/>} />
        <Route path="league" element={<League/>} />
        <Route path="teams" element={<Teams/>} />
        <Route path="admin" element={<Admin/>} />
        <Route path="profile" element={<Profile/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
