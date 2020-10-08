import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex='0' mode="vertical" defaultOpenSubMenus={['3']} >
          <MenuItem >link 1</MenuItem>
          <MenuItem disabled >link 2</MenuItem>
          <MenuItem >link 3</MenuItem>
          <SubMenu title="aaa" >
            <MenuItem >link 1</MenuItem>
            <MenuItem >link 2</MenuItem>
            <MenuItem >link 3</MenuItem>
          </SubMenu>
        </Menu>
        <Button autoFocus > Hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.large} > Hello </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_black" > Hello </Button>
        <Button disabled > Hello </Button>
      </header>
    </div>
  );
}

export default App;
