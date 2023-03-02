import { Bug, Files, Monitor, Puzzle, Search, Settings } from "lucide-react";
import { GitBranch, Lightning, PawPrint, Tree, User } from "phosphor-react";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="side-group1 side-flex">
        <Files size={40} />
        <Search size={40} />
        <GitBranch size={40} />
        <Bug size={40} />
        <Puzzle size={40} />
        <Monitor size={40} />
        <Tree size={40} />
        <PawPrint size={40} />
        <Lightning size={40} />
      </div>
      <div className="side-group2 side-flex">
        <User size={40} />
        <Settings size={40} />
      </div>
    </div>
  );
}
