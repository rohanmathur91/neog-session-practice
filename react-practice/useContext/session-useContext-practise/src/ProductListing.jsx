import { useCart } from "./cart-context";
import { useLanguage } from "./language-context";
import { languageLib } from "./languages";

export function ProductListing() {
  const { addToCart } = useCart();
  const { language } = useLanguage();

  return ["1", "2", "3", "4"].map((item) => (
    <div>
      <h2 key={item}>{`${languageLib[language]["product"]} ${item}`}</h2>
      <button onClick={addToCart}>
        {`${languageLib[language]["cartButton"]}`}
      </button>
    </div>
  ));
}
