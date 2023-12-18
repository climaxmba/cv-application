// import { useState } from 'react'
import "./styles/App.css";
import "./styles/utils.css";
import Forms from "./compenents/Forms";
import Display from "./compenents/Display";
import { PanneledDiv } from "./compenents/utils";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <PanneledDiv>
        <Forms />
        <Display />
      </PanneledDiv>
    </>
  );
}

export default App;
