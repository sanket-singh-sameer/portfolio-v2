import { render } from "preact";
import { App } from "./app.jsx";

import "./styles/fonts.css";
import "./styles/globals.css";
import "./styles/transition.css";
import "./styles/menu.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/work.css";

import "./legacy/transition.js";
import "./legacy/lenis-scroll.js";
import "./legacy/menu.js";
import "./legacy/hero.js";
import "./legacy/featured-work.js";
import "./legacy/services.js";
import "./legacy/footer.js";
import "./legacy/about.js";
import "./legacy/contact.js";

render(<App />, document.getElementById("app"));
