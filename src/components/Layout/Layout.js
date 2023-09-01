import Header from "../Header/Header";
import css from "../Layout/Layout.module.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}
