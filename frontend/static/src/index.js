import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import Login from './components/Login';
import Register from './components/Register'
import RecipeForm from './components/RecipeForm';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<App />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-recipe" element={<RecipeForm />} />
          </Route>
      </Routes>
      </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
