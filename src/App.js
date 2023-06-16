import "./App.css";
import Heder from "./components/Heder/Heder";
import OurHoney from "./components/OurHoney/HoneyButton";
import Title from "./components/Title/Title";
import WhatWiDo from "./components/WhatWiDo/WhatWiDo";

function App() {
  return (
    <div className="page">
      <div className="fon ">
        <Heder />
        <Title />
      </div>
      <div className="products">
        <WhatWiDo/>
      </div>
      <OurHoney/>
 
    </div>
  );
}

export default App;
