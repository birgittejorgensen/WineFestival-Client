import React from 'react';
import './App.css';
//@ts-ignore
import CheeseburgerMenu from 'cheeseburger-menu';
//@ts-ignore
import HamburgerMenu from 'react-hamburger-menu';
import SidebarNav from './sidebarnav/SidebarNav';
//@ts-ignore
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import EventsPage from './pages/events/EventsPage';
import LandingPage from './pages/landingPage/LandingPage';

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
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/events" component={EventsPage} />
          </Switch>
        </div>
      </div>
    );
  }
}
