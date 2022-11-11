import './App.css';
// import ChildComponent from './components/ChildComponent'
import Count from './components/Count'

const App = () => {
  return (
    <div className="App">
			<Count />
      {/* <ChildComponent hobby='Swimming' />
			<ChildComponent hobby='Singing' />
			<ChildComponent hobby='Dancing' />
			<ChildComponent hobby='Reading Books' />
			<ChildComponent hobby='Sleeping' /> */}
    </div>
  );
}

export default App;
