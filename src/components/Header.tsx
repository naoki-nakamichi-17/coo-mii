export default function Header() {
  return (
    <header className="header">
      <nav className="h-nav">
        <ul className="head-menu">
          <li>
            <span
              className="menu-button"
              role="button"
              tabIndex={0}
            >
              <span className="material-icons">menu</span>
            </span>
          </li>
          <li className="search-area">
            <input
              type="text"
              className="search-input"
              placeholder="検索キーワードを入力"
            />
            <button type="button" className="search-button">
              <span className="material-icons">search</span>
            </button>
          </li>
          <li className="head-right">
            <span className="material-icons">apps</span>
            <span className="material-icons">notifications</span>
            <span className="material-icons">account_circle</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}
