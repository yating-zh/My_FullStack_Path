export default function ConditionalFruit({ name, price, emoji, soldout }) {
  return price > 5 ? (
    <li>
      {emoji}
      {name} ${price} {soldout ? "-- soldout" : ""}
    </li>
  ) : (
    ""
  );
}
