 //tenary operation is good fo a boolean value
// propTypes helps to validate the data type if the values and if required or not 

import PropTypes from "prop-types";
function Student(props){
	return(
		<div className="student">
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
			<p>Student: {props.isStudent ? "Yes" : "No"}</p>
		</div>
	)
}
Student.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	isStudent: PropTypes.bool,
}
export default Student;