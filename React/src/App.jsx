//  props = read-only properties that are sheared between components 
		// A parent component can send data to a child component .
		//  <Component key=value />

import Student from "./Student";
function App() {
  return (
		<>
			<Student name="Spongebob" age={20} isStudent= {true}/>
			<Student name="Patrick" age={32} isStudent= {false}/>
			<Student name="Derreck" age={53} isStudent= {false}/>
			<Student name="Frank" age={27} isStudent={true}/>
		</>
  )
}

export default App