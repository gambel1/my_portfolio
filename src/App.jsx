import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Layout from "./components/Layout/Layout";
import Portfolio from "./pages/Portfolio/Portfolio";
import HomePage from "./pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
// import { Suspense } from "react";

export default function App() {
  return (
    <>
      {/* <Suspense fallback={ null} /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
