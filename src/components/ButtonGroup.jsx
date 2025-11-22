import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttonType="secondary">
        Mark All as Complete
      </Button>
      <Button onClick={markAllAsIncomplete} buttonType="secondary">
        Mark All as Incomplete
      </Button>
      <Button onClick={resetToInitial} buttonType="secondary">
        Reset to Initial
      </Button>
      <Button onClick={removeAllItems} buttonType="secondary">
        Remove All Items
      </Button>
    </section>
  );
}
