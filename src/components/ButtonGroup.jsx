import { useItemsContext } from "../lib/hooks";
import Button from "./Button";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useItemsContext();

  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
        Mark All as Complete
      </Button>
      <Button onClick={handleMarkAsIncomplete} buttonType="secondary">
        Mark All as Incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">
        Reset to Initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">
        Remove All Items
      </Button>
    </section>
  );
}
