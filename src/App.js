import './App.css';
// import ChildComponent from './components/ChildComponent'
// import Count from './components/Count'
// import Form from './components/Form'
// import Student from './components/Student'
import Loop from './components/Loop'

const App = () => {
  return (
    <div className="App">
			<Loop />
			{/* <Student
				firstName='Srajan'
				lastName='Sen'
				batchNumber={12}
				likesIceCream={true}
			/> */}
			{/* <Form /> */}
			{/* <Count /> */}
      {/* <ChildComponent hobby='Swimming' />
			<ChildComponent hobby='Singing' />
			<ChildComponent hobby='Dancing' />
			<ChildComponent hobby='Reading Books' />
			<ChildComponent hobby='Sleeping' /> */}
    </div>
  );
}

export default App;
