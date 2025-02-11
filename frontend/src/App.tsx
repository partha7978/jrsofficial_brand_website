import "./App.css";
import { Home, Episodes, About } from "./containers";
import { Navbar } from "./components";
import { Provider } from "react-redux";
import dataStore from "./store/dataStore";
import Scroll from './components/Smoothscroll/SmoothScroll.js';


function App() {
  return (
    <>
    <Scroll />
      <Provider store={dataStore}>
        <Navbar />
        <Home />
        <Episodes />
        <About />
      </Provider>
    </>
  );
}

export default App;
