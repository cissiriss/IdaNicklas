import "./index.css";

import { DropDown } from "./components/DropDown";
import { StartPage } from "./Views/StartPage";
import { WeddingPage } from "./Views/WeddingPage";
import ProgramPage from "./Views/ProgramPage";
import { PageLayoutContainer } from "./components/PageLayoutContainer";

function App() {
  return (
    <PageLayoutContainer>
      <DropDown />
      <StartPage />
      <WeddingPage />
      <ProgramPage />
    </PageLayoutContainer>
  );
}

export default App;
