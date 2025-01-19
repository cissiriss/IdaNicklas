import "./index.css";

import { DropDown } from "./components/DropDown";
import { StartPage } from "./Views/StartPage";
import { WeddingPage } from "./Views/WeddingPage";
import ProgramPage from "./Views/ProgramPage";
import { PageLayoutContainer } from "./components/PageLayoutContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <PageLayoutContainer>
      <DropDown />
      <StartPage />
      <WeddingPage />
      <ProgramPage />
      <Footer />
    </PageLayoutContainer>
  );
}

export default App;
