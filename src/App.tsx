import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Background from "./components/background/Background";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Spiral from "./pages/Spiral";
import Intro from "./components/intro/intro";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}
      >
        {/* DEFAULT / SPIRAL */}
        <Route
          path="/"
          element={<Spiral />}
        />

        {/* LIST MODE */}
        <Route
          path="/list"
          element={<Intro />}
        />

        {/* PAGES */}
        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/skills"
          element={<Skills />}
        />

        <Route
          path="/experience"
          element={<Experience />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Background />

      <div className="relative z-10">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}