import Button from "./components/Button";
  const App = () => {
  return (
    <div>
      <Button color='primary' onClick={() => console.log('Clicked')}>
        Success
      </Button>
    </div>
  );
}
export default App;
