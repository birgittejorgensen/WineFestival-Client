import * as React from 'react';

export interface IWinePageProps {}

export interface IWinePageState {}

export default class WinePage extends React.Component<
  IWinePageProps,
  IWinePageState
> {
  constructor(props: IWinePageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>Under construction ;)</div>;
  }
}
