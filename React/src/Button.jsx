// in-line CSS styling(is convenient and easy to understand)
function Button(){
	const styles = {
		backgroundColor: "hsl(200, 100%, 50%)",
		color: "white",
		padding: "10px 20px",
		borderRadius: "5px",
		cursor:" pointer",
		border: "none"
	}
	return(<button style={styles}>Click me</button>);
}

export default Button;