import InputWater from "./components/InputWater/InputWater";
import { Provider } from "react-redux";
import store from "./store";
import Container from "./Container"

function App() {
  return (
    <Provider store={store}>
      <Container/>
    </Provider>
  );
}

export default App;
