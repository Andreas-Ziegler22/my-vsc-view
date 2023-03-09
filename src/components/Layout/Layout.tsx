import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./Layout.css";

import { Content } from "../Content/Content";

export function Layout() {
  return (
    <div className="main">
      <Header />
      <Content />

      <Footer />
    </div>
  );
}
