import "./index.css";

import { DropDown } from "./components/DropDown";
import { StartPage } from "./Views/StartPage";
import { WeddingPage } from "./Views/WeddingPage";
import ProgramPage from "./Views/ProgramPage";
import { PageLayoutContainer } from "./components/PageLayoutContainer";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./Views/LoginPage";
import AdminPage from "./Views/AdminPage";

function App() {
  return (
    <PageLayoutContainer>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <DropDown />
              <StartPage />
              <WeddingPage />
              <ProgramPage />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </PageLayoutContainer>
  );
}

export default App;
