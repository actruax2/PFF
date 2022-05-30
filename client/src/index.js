import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";


import News from './pages/News/News'
import League from './pages/League/League'
import Teams from './pages/Teams/Teams'
import Admin from './pages/Admin/Admin'
import Profile from './pages/Profile/Profile'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="news" element={<News />} />
            <Route path="league" element={<League />} />
            <Route path="teams" element={<Teams />} />
            <Route path="admin" element={<Admin />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
