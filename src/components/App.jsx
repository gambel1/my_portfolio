import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import Layout from "./Layout/Layout";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

// import { Suspense } from "react";

export default function App() {
  return (
    <>
      {/* <Suspense fallback={ null} /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}
