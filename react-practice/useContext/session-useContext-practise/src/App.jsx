import { useTheme } from "./theme-context";
import { useLanguage } from "./language-context";
import { languageLib } from "./languages";
import { ProductListing } from "./ProductListing";
import { Cart } from "./Cart";

import "./styles.css";

export default function App() {
  const { theme, changeTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  return (
    <div className={`App ${theme}`}>
      <button onClick={changeTheme}>Toggle mode</button>

      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
      </select>

      <h1 className="app-header">{`${languageLib[language]["title"]}`}</h1>
      <div className="app-body">
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
