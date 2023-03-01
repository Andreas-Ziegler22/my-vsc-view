import { Sidebar } from "lucide-react";
import "./Header.css";

export function Header() {
  return (
    <div className="header-container">
      <div className="left-btn">
        <button type="button" className="btn bg-red"></button>
        <button type="button" className="btn bg-yellow"></button>
        <button type="button" className="btn bg-green"></button>
      </div>
      <div>Welcome</div>
      <div className="right-btn">
        <a href="">
          <Sidebar className="rotate-left" />
        </a>
        <a href="">
          <Sidebar className="rotate-down" />
        </a>
        <a href="">
          <Sidebar className="rotate-right" />
        </a>
      </div>
    </div>
  );
}
