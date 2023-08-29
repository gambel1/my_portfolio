import Header from "../Header/Header";
import css from '../Layout/Layout.module.css'
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className={css.main}>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer>Footer</footer>
    </>
  );
}
