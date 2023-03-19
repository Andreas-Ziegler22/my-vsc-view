import "./Article-right.css";

export function ArticleRight() {
  return (
    <div className="article-right">
      <ul>
        <li className="Li-title">Walkthroughs</li>
        <li className="final-art test">
          <h6>Get started with VS Code</h6>
          <p>Discover the best customizations to make VS Code yours.</p>
          <span className="bar" style={{ width: "20%" }}></span>
        </li>
        <li className="final-art">
          Lear the Fundamentals
          <br />
          <span className="bar" style={{ width: "15%" }}></span>
        </li>
        <li className="final-art">
          Boost your Productivity
          <br />
          <span className="bar" style={{ width: "25%" }}></span>
        </li>
        <li className="final-art">
          Get stared with JavaScript and Node.js{" "}
          <span className="update">Updated</span>
          <br />
          <span className="bar"></span>
        </li>
        <li className="final-art">
          Angular Schematics documentation{" "}
          <span className="update">Updated</span>
          <br />
          <span className="bar" style={{ width: "10%" }}></span>
        </li>
      </ul>
    </div>
  );
}
