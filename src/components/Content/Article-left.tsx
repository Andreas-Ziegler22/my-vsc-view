import "./Content.css";
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
          <li>New File...</li>
          <li>Open...</li>
          <li>Clone Git Repository...</li>
        </ul>
      </div>
      <div className="gitRepo">
        <ul>
          <li>Git Repository-peojects</li>
          <li>Git Repository-peojects</li>
          <li>Git Repository-peojects</li>
          <li>Git Repository-peojects</li>
          <li>Git Repository-peojects</li>
          <li>More..</li>
        </ul>
      </div>
    </div>
  );
}
