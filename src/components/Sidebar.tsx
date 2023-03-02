import { Bug, Files, Monitor, Puzzle, Search, Settings } from "lucide-react";
import {
  DotsThree,
  GitBranch,
  Lightning,
  PawPrint,
  Tree,
  User,
} from "phosphor-react";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="side-group1 side-flex">
        <a href="">
          <Files size={40} />
        </a>
        <a href="">
          <Search size={40} />
        </a>
        <a href="">
          <GitBranch size={40} />
        </a>
        <a href="">
          <Bug size={40} />
        </a>
        <a href="">
          <Puzzle size={40} />
        </a>
        <a href="">
          <Monitor size={40} />
        </a>
        <a href="">
          <Tree size={40} />
        </a>
        <a href="">
          <PawPrint size={40} />
        </a>
        <a href="">
          <Lightning size={40} />{" "}
        </a>
        <a href="">
          <DotsThree size={40} />
        </a>
      </div>
      <div className="side-group2 side-flex">
        <User size={40} />
        <Settings size={40} />
      </div>
    </div>
  );
}
