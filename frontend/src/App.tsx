import "./App.css";
import { Home, About, Testimonials, EpisodesSlider, Episodes } from "./containers";
import { Navbar } from "./components";
import { Provider } from "react-redux";
import dataStore from "./store/dataStore";
import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";

const SingleEpisodePage = lazy(
  () => import("./containers/SingleEpisodePage/SingleEpisodePage")
);

const HomeComponent = () => {
  return (
    <>
      <Home />
      <EpisodesSlider />
      <About />
      <Testimonials />
    </>
  );
};

function App() {
  return (
    <>
      <Provider store={dataStore}>
        <Navbar />
        <Routes>
          <Route index element={<HomeComponent />} />
          <Route
            path="/episode/:epId"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SingleEpisodePage />
              </Suspense>
            }
          />
          <Route
            path="/episodes"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Episodes />
              </Suspense>
            }
          />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
