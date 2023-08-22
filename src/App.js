import React from 'react';

import axios from 'axios';

import './App.css';

const TextField = ({ label }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" />
    </div>
  );
};

const Button = ({ label }) => {
  return <button onClick={handleSubmit}>{label}</button>;
};

const handleSubmit = () => {
  console.log('hi');
};


function App() {
  return (
    <div>
      <TextField label="Email"/>
      <TextField label="Phone Number"/>
      <Button onClick={handleSubmit} label="Submit"/>
    </div>
  );
}

export default App;
