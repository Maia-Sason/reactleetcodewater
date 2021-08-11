import './App.css';
import InputWater from "./components/InputWater/InputWater";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Which two walls can hold the most water?</h1>
      <div><p>Enter a valid sequence of numbers separated by spaces</p><InputWater/></div>
    </div>
    </Provider>
  );
}

export default App;
