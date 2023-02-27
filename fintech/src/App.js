import './App.css';

const Welcome = (props) => {
  console.log(props);
  return (
    <p>
      안녕하세요! {props.userAge}세 {props.userHeight}cm {props.userName}님!
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <Welcome userName="김창훈" userAge={26} userHeight={170}></Welcome>
    </div>
  );
}

export default App;