import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "./context/themeContext.tsx";
import i18n from "./i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>
);
