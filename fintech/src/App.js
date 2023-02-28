import './App.css';
import Welcome from './components/Welcome';
import InputComponent from './components/InputComponent';
import ListComponents from './components/ListComponents';
import StyledComponent from './components/StyledComponent';

function App() {
  return (
    <div className="App">
      <Welcome userName="김창훈" userAge={26} userHeight={170}></Welcome>
      <InputComponent></InputComponent>
      <ListComponents></ListComponents>
      <StyledComponent></StyledComponent>
    </div>
  );
}

export default App;