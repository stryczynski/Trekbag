import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalNumberofItems, numberOfItemsPacked }) {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberofItems={totalNumberofItems}
        numberOfItemsPacked={numberOfItemsPacked}
      />
    </header>
  );
}
