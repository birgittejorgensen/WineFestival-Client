import * as React from 'react';

export interface ILandingPageProps {}

export interface ILandingPageState {}

export default class LandingPage extends React.Component<
  ILandingPageProps,
  ILandingPageState
> {
  constructor(props: ILandingPageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>Landing page here ;)</div>;
  }
}
