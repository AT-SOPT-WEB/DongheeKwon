import { useState } from "react";
import BaseBall from "./components/BaseBall/BaseBall";
import GithubSearch from "./components/GithubSearch/GithubSearch";
import Header from "./components/Header/Header";
import "./styles/reset.css";
import { MENU } from "./constants/Menu.js";

function App() {
  const [menu, setMenu] = useState(MENU.GITHUB);
  const MENU_COMPONENTS = {
    [MENU.GITHUB]: <GithubSearch />,
    [MENU.BASEBALL]: <BaseBall />,
  };
  return (
    <>
      <Header menu={menu} handleMenu={setMenu} />
      {MENU_COMPONENTS[menu]}
    </>
  );
}

export default App;
