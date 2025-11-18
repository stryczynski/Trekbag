const initialItems = [
  {
    name: "good mood",
    packed: true,
  },
  {
    name: "passport",
    packed: false,
  },
  {
    name: "phone charger",
    packed: false,
  },
];

export default function ItemList() {
  return (
    <ul>
      {
        initialItems.map((item) => (
          <Item key={item.name} item={item} />
        ))
      }
    </ul>
  );
}

const Item = ({ item }) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" /> {item.name}
      </label>
    </li>
  );
};
