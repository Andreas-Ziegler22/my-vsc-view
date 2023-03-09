import { Sidebar } from "../../Sidebar/Sidebar";
import "./Content.css";

export function Content() {
  return (
    <div
      className="main-content-container"
      style={{ border: "3px solid hotpink" }}
    >
      <Sidebar />
      <article className="article-container">
        <div className="article-left">
          <h1>hi</h1>
        </div>
        <div className="article-right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            sequi nisi vero repellat a ullam!
          </p>
        </div>
      </article>
    </div>
  );
}
