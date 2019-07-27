import React from 'react';
import './App.css';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';

const App: React.FC = () => {
  return (
    <div>
      <CheeseburgerMenu
        isOpen={this.state.menuOpen}
        closeCallback={this.closeMenu.bind(this)}
      >
        <MenuContent closeCallback={this.closeMenu.bind(this)} />
      </CheeseburgerMenu>

      <HamburgerMenu
        isOpen={this.state.menuOpen}
        menuClicked={this.openMenu.bind(this)}
        width={32}
        height={24}
        strokeWidth={3}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />

      <div style={contentStyles}>
        <h1>Cheeseburger Menu demo</h1>
        <p>Click the hamburger icon to open menu</p>
      </div>
    </div>
  );
};

export default App;
