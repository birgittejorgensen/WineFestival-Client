import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ISidebarNavProps {
  closeCallback: () => void;
}

export interface ISidebarNavState {}

export default class SidebarNav extends React.PureComponent<
  ISidebarNavProps,
  ISidebarNavState
> {
  constructor(props: ISidebarNavProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <Link to="/events">events</Link>
      </div>
    );
  }
}
