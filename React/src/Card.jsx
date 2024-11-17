import profilePic from "../public/GGIthub.jpeg";
function Card(){
	return (
		<div className= "card">
			<img className="card-image" src={profilePic} alt="Profile picture"></img>
			<h2 className="card-title">Stephen Oyeyemi</h2>
			<p className="card-text">I am a full stack Software Engineer.</p>
		</div>
	)
}

export default Card