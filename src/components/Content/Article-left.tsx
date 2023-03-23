import { FilePlus, FolderNotchOpen, GitBranch } from "phosphor-react";
import "./Article-left.css";
import { Repos } from "./Repos";

export function ArticleLeft() {
  return (
    <div className="article-left">
      <div className="article-header">
        <h1>Visual Studio Code</h1>
        <p>Ediding envolved</p>
      </div>

      <div className="flex-list">
        <ul>
          <li className="Li-title">Start</li>
          <li>
            <FilePlus size={25} />
            New File...
          </li>
          <li>
            <FolderNotchOpen size={25} />
            Open...
          </li>
          <li>
            <GitBranch size={25} />
            Clone Git Repository...
          </li>
        </ul>
      </div>
      {/* <div className="gitRepo">
        <ul>
          <li>Recent</li>
          <li>Git Repository-peojects</li>
          <li>Git Repository-peojects</li>
          <li>Git Repository-peojects</li>
          <li>Git Repository-peojects</li>
          <li>Git Repository-peojects</li>
          <li>More..</li>
        </ul> 
      </div> */}
      <Repos />
    </div>
  );
}
