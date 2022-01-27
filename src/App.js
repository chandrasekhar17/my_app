import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
//import WithJsx from './components/WithJsx'
import Message  from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ChanduHook from './components/ChanduHook';


function App() {
  return (
    <div className="App">
      { /*<Hello name="Chandu" age="21"></Hello>
      <Hello name="Chaitrika" age="16" ></Hello>
      <Hello name="Aditya" age ="27" />
      <Welcome name="Sarangapani" age= "25" />
      <Welcome name="priya" age="21" />
      <Welcome name="vishnu" age="16" />
  <FunctionClick /> */ }
      <Message /> 
      
      
      

      
      
      
      

    </div>
  );
}

export default App;
