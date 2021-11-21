import { ThemeProvider } from "@react95/core";
import "@react95/icons/icons.css";
import DeskIcons from "./structure/DeskIcons/Index";
import Contact from "./components/Contact/Index";
import Projects from './components/Projects/Index';
import Welcome from './components/Welcome/Index';

import "./public/img/BG.svg";

import Toolbar from "./structure/Toolbar/Index";

function App() {
  return (
    <div className="App">
      <ThemeProvider>

        <Welcome />

        <DeskIcons />
        <Contact />
        <Projects />
        <Toolbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
