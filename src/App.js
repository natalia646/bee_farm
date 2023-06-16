import "./App.css";
import Heder from "./components/Heder/Heder";
import HoneyButton from "./components/OurHoney/HoneyButton";
import Title from "./components/Title/Title";
import WhatWiDo from "./components/WhatWiDo/WhatWiDo";

function App() {
  return (
    <div className="page">
      <div className="fon ">
        <Heder />
        <Title />
      </div>
      <WhatWiDo />
      <HoneyButton />
    </div>
  );
}

export default App;
