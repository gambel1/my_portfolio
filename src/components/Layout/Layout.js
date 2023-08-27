import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}
