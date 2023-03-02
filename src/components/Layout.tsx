import { Footer } from "./Footer";
import { Header } from "./Header";
import "./Layout.css";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="main">
      <Header />
      <div className="main-content"></div>
      <Sidebar />
      <Footer />
    </div>
  );
}
