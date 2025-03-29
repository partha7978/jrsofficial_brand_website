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
const AboutPage = lazy(() => import("./containers/AboutPage/AboutPage"));
const Course = lazy(() => import("./containers/Course/Course"));
const Production = lazy(() => import("./containers/Production/Production"));

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
            path="/episodes/:epCategory/:epId"
            element={
              <Suspense fallback={<Loader />}>
                <SingleEpisodePage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <AboutPage />
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
            path="/episodes/:epCategory"
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
          <Route
            path="/work"
            element={
              <Suspense fallback={<Loader />}>
                <Course />
              </Suspense>
            }
          />
          <Route
            path="/work/courses"
            element={
              <Suspense fallback={<Loader />}>
                <Course />
              </Suspense>
            }
          />
          <Route
            path="/work/production"
            element={
              <Suspense fallback={<Loader />}>
                <Production />
              </Suspense>
            }
          />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
