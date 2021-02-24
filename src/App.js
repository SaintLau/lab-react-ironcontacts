import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import DisplayFive from './components/DisplayFive';

function App() {
  return (
    <div className="App">
    <h1>IronContacts</h1>
      <DisplayFive />
    </div>
  );
}

export default App;
