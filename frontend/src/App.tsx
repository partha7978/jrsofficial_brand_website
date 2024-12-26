import "./App.css";
import { Home } from "./containers";
import { Navbar } from "./components";
import { Provider } from "react-redux";
import dataStore from "./store/dataStore";
function App() {
  return (
    <>
      <Provider store={dataStore}>
        <Navbar />
        <Home />
      </Provider>
    </>
  );
}

export default App;
