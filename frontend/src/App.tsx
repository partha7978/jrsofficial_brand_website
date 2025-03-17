import "./App.css";
import {
  Home,
  About,
  Testimonials,
  EpisodesSlider,
  Footer,
} from "./containers";
import { Navbar } from "./components";
import { Provider } from "react-redux";
import dataStore from "./store/dataStore";
import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

const SingleEpisodePage = lazy(
  () => import("./containers/SingleEpisodePage/SingleEpisodePage")
);

const EpisodesPage = lazy(() => import("./containers/Episodes/Episodes"));
const Contact = lazy(() => import("./containers/Contact/Contact"));

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

const HomeWithFooter = Footer(HomeComponent);

function App() {
  return (
    <>
      <Provider store={dataStore}>
        <Navbar />
        <Routes>
          <Route index element={<HomeWithFooter />} />
          <Route
            path="/episodes/:epId"
            element={
              <Suspense fallback={<Loader />}>
                <SingleEpisodePage />
              </Suspense>
            }
          />
          <Route
            path="/episodes"
            element={
              <Suspense fallback={<Loader />}>
                <EpisodesPage />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
