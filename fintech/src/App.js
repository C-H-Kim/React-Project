import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome userName="김창훈" userAge={26} userHeight={170}></Welcome>
      <Welcome userName="홍길동" userAge={20} userHeight={180}></Welcome>
      <Welcome userName="고길동" userAge={47} userHeight={176}></Welcome>
    </div>
  );
}

export default App;