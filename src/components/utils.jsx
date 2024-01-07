import Icon from "@mdi/react";
import { mdiPrinter, mdiRocketLaunch } from "@mdi/js";

function PanneledDiv({ children }) {
  return <div className="panneled-div">{children}</div>;
}

function PrintButton() {
  return window.print && (
    <button type="button" className="clickable print-btn" onClick={print}>
      <div><Icon path={mdiPrinter} /> Print</div>
    </button>
  );
}

function WelcomeScreen() {
  return (
    <div id="welcome" onAnimationEnd={(e) => e.target.style.display = "none"}>
      <Icon className="moving-icon" path={mdiRocketLaunch} />
      <h1>Build your CV in less than 10mins</h1>
    </div>
  );
}

export { WelcomeScreen, PanneledDiv, PrintButton };
