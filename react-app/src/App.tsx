import { it } from "node:test";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Tokyo", "New York", "Lagos", "Accra", "London", "Abuja"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}
export default App;
