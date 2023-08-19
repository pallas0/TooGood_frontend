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
  return (
    <div>
      <TextField label="Email"/>
      <TextField label="Phone Number"/>
      <Button label="Submit"/>
    </div>
  );
}

export default App;
