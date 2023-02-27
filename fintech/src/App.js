import './App.css';
import Welcome from './components/Welcome';
import InputComponent from './components/InputComponent';

function App() {
  return (
    <div className="App">
      <Welcome userName="김창훈" userAge={26} userHeight={170}></Welcome>
      <InputComponent></InputComponent>
    </div>
  );
}

export default App;