
function Food(){
	const food1 = "Rice";
		const food2 = "Bread";
		const food3 = "Spaghetti";
	return(
		<ul>
			<li>{food1}</li>
			<li>{food2}</li>
			<li>{food3.toLocaleUpperCase()}</li>
		</ul>
	)
}

export default Food;