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
  return <button>{label}</button>;
};




function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('hi');
  };
  return (
    <div>
      <TextField label="Email"/>
      <TextField label="Phone Number"/>
      <Button onClick={(e) =>handleSubmit} label="Submit"/>
    </div>
  );
}

export default App;
