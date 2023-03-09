import { Sidebar } from "../../Sidebar/Sidebar";
import { ArticleLeft } from "./Article-left";
import { ArticleRight } from "./Article-right";
import "./Content.css";

export function Content() {
  return (
    <div
      className="main-content-container"
      style={{ border: "3px solid hotpink" }}
    >
      <Sidebar />
      <article className="article-container">
        <ArticleLeft />
        <ArticleRight />
      </article>
    </div>
  );
}
