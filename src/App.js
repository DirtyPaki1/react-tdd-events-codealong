function App() {
  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        type="checkbox"
        id="pepperoni"
        checked={false}
        aria-checked={false}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>
    </div>
  );
}

export default App;