import { useState } from "react";

interface Props {
	items: string[];
	heading: string;
}
function ListGroup() {
  let items = ["Tokyo", "New York", "Lagos", "Accra", "London", "Abuja"];
	//Hook
	const [selectedIndex, setSelectedIndex] = useState(-1);
	//Event handler
	const handleClick = (event: MouseEvent) => console.log(event) 
	const handleHover = (event: MouseEvent) => console.log(event)
  return (
    <>
      <h1>List</h1>
      {/* { items.length === 0 ? <p>No items found😔</p> : null } */}
      {items.length === 0 && <p>No items found😔</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className= {selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => { setSelectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
