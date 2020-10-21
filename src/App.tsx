import React, { useState } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu'
import Icon from "./components/Icon/icon";
import Transition from "./components/Transition/transition";
library.add(fas)
function App() {
  const [ show, setShow ] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" theme="danger" size="10x" />
        <Menu defaultIndex='0' mode="horizontal" defaultOpenSubMenus={['3']} >
          <MenuItem >link 1</MenuItem>
          <MenuItem disabled >link 2</MenuItem>
          <MenuItem >link 3</MenuItem>
          <SubMenu title="aaa" >
            <MenuItem >link 1</MenuItem>
            <MenuItem >link 2</MenuItem>
            <MenuItem >link 3</MenuItem>
          </SubMenu>
        </Menu>
        <Button size={ButtonSize.large} onClick={() => setShow(!show)} >Toggle</Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
            <p>aaaaaaaaaaaaaaaaaa</p>
            <p>aaaaaaaaaaaaaaaaaa</p>
            <p>aaaaaaaaaaaaaaaaaa</p>
            <p>aaaaaaaaaaaaaaaaaa</p>
            <p>aaaaaaaaaaaaaaaaaa</p>
          </div>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-top"
          wrapper
        >
          <Button btnType={ButtonType.Primary} >A LargeButton</Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
