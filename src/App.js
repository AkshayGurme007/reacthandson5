import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Higher-order Functions:-</h1>
      <p>
        A higher-order function is a function that returns another function when
        it’s called. Often they also take a function as an argument, but this
        isn’t required for a function to be considered higher-order.
      </p>
      <h2>ReactJS Pure Components:</h2>
      <p>
        ReactJS has provided us a Pure Component. If we extend a class with Pure
        Component, there is no need for shouldComponentUpdate() Lifecycle
        Method. ReactJS Pure Component Class compares current state and props
        with new props and states to decide whether the React component should
        re-render itself or Not.
      </p>
      <p>
        In simple words, If the previous value of state or props and the new
        value of state or props is the same, the component will not re-render
        itself. Since Pure Components restricts the re-rendering when there is
        no use of re-rendering of the component. Pure Components are Class
        Components which extends React.PureComponent.
      </p>
    </div>
  );
}

export default App;
