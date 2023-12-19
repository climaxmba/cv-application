// import { useState } from 'react'
import "./styles/App.css";
import "./styles/Controls.css";
import "./styles/utils.css";
import Controls from "./compenents/Controls";
import Display from "./compenents/Display";
import { PanneledDiv } from "./compenents/utils";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <PanneledDiv>
        <Controls />
        <Display />
      </PanneledDiv>
    </>
  );
}

export default App;
