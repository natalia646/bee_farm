import "./App.css";
import Heder from "./components/Heder/Heder";
import HoneyButton from "./components/OurHoney/HoneyButton";
import Title from "./components/Heder/Title";
import WhatWiDo from "./components/WhatWiDo/WhatWiDo";
import AllHoney from "./components/OurHoney/AllHoney";

function App() {
  return (
    <div className="page">
      <div className="fon ">
        <Heder />
        <Title />
        
      </div>
      <WhatWiDo />
      <AllHoney/>
      <HoneyButton />
    </div>
  );
}

export default App;
