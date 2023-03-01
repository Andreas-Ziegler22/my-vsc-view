import "./Header.css";

export function Header() {
  return (
    <div className="header-container">
      <div className="left-btn">
        <button type="button" className="bg-red"></button>
        <button type="button" className="bg-yellow"></button>
        <button type="button" className="bg-green"></button>
      </div>
      <div>Welcome</div>
      <div className="right-btn"></div>
    </div>
  );
}
