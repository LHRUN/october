import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus > Hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.large} > Hello </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_black" > Hello </Button>
        <Button disabled > Hello </Button>
      </header>
    </div>
  );
}

export default App;
