import { useCart } from "./cart-context";
import { useLanguage } from "./language-context";
import { languageLib } from "./languages";

export function Cart() {
  const { items } = useCart();
  const { language } = useLanguage();
  return <h1>{`${languageLib[language]["cartTitle"]} ${items}`}</h1>;
}
