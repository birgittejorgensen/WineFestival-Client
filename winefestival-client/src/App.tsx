import React from 'react';
import './App.css';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import SidebarNav from './sidebarnav/SidebarNav';

const contentStyles: any = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

export interface IAppProps {}

export interface IAppState {
  menuOpen: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  public openMenu(): void {
    this.setState({ menuOpen: true });
  }

  public closeMenu(): void {
    this.setState({ menuOpen: false });
  }

  public render() {
    return (
      <div>
        <CheeseburgerMenu
          isOpen={this.state.menuOpen}
          closeCallback={this.closeMenu.bind(this)}
        >
          <SidebarNav closeCallback={this.closeMenu.bind(this)} />
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
  }
}
