import Icon from "@mdi/react";
import { mdiPrinter } from "@mdi/js";

function PanneledDiv({ children }) {
  return <div className="panneled-div">{children}</div>;
}

function PrintButton() {
  return (
    <button type="button" className="clickable print-btn" onClick={print}>
      <div><Icon path={mdiPrinter}></Icon> Print</div>
    </button>
  );
}

export { PanneledDiv, PrintButton };
