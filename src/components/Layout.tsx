import { Footer } from "./Footer";
import { Header } from "./Header";
import "./Layout.css";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
}
