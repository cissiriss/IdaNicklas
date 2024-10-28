import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { OSAFormProvider } from "./providers/OSAFormProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OSAFormProvider>
      <App />
    </OSAFormProvider>
  </StrictMode>
);
