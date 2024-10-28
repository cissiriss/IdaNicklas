import "./index.css";

import { DropDown } from "./components/DropDown";
import { StartPage } from "./Views/StartPage";
import { InfoPage } from "./Views/InfoPage";
import { PartyPage } from "./Views/PartyPage";
import { OSAPage } from "./Views/OSAPage";
import { SpeachPage } from "./Views/SpeachPage";
import { GiftPage } from "./Views/GiftPage";
import { WeddingPage } from "./Views/WeddingPage";

function App() {
  return (
    <>
      <div>
        <DropDown />
      </div>
      <div id="home">
        <StartPage />
      </div>
      <div id="wedding">
        <WeddingPage />
      </div>
      <div id="party">
        <PartyPage />
      </div>
      <div id="info">
        <InfoPage />
      </div>
      <div id="gifts">
        <GiftPage />
      </div>
      <div id="speaches">
        <SpeachPage />
      </div>
      <div id="osa">
        <OSAPage />
      </div>
    </>
  );
}

export default App;
