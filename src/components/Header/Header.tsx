import { LayoutGrid, Sidebar } from "lucide-react";
import { ArrowsInSimple, Minus, X } from "phosphor-react";
import "./Header.css";

export function Header() {
  return (
    <div className="header-container">
      <div className="left-btn">
        <button type="button" className="btn bg-red">
          <X className="icons-left" />
        </button>
        <button type="button" className="btn bg-yellow">
          <Minus className="icons-left" />
        </button>
        <button type="button" className="btn bg-green">
          <ArrowsInSimple className="icons-left" />
        </button>
      </div>
      <div>Welcome</div>
      <div className="right-btn">
        <a href="">
          <Sidebar className="rotate-left" size={20} />
        </a>
        <a href="">
          <Sidebar className="rotate-down" size={20} />
        </a>
        <a href="">
          <Sidebar className="rotate-right" size={20} />
        </a>
        <a href="">
          <LayoutGrid className="rotate" size={20} />
        </a>
      </div>
    </div>
  );
}
