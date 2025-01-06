import "./index.css";

import { DropDown } from "./components/DropDown";
import { StartPage } from "./Views/StartPage";
import { WeddingPage } from "./Views/WeddingPage";
import ProgramPage from "./Views/ProgramPage";

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
      <div id="program">
        <ProgramPage />
      </div>
    </>
  );
}

export default App;
