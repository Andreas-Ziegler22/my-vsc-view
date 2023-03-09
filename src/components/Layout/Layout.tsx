import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./Layout.css";
import { Sidebar } from "../../Sidebar/Sidebar";

export function Layout() {
  return (
    <div className="main">
      <Header />
      <div className="main-content">
        <article></article>
        <article></article>
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
}
