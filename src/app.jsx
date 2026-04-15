import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";

function resolvePageType() {
  const path = window.location.pathname.toLowerCase();
  if (path.endsWith("/contact") || path.endsWith("/contact/")) {
    return "contact";
  }

  return "home";
}

export function App() {
  const pageType = resolvePageType();
  return pageType === "contact" ? <ContactPage /> : <HomePage />;
}
