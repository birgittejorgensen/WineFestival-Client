import * as React from 'react';

export interface IRedWinePageProps {}

export interface IRedWinePageState {}

export default class RedWinePage extends React.Component<
  IRedWinePageProps,
  IRedWinePageState
> {
  constructor(props: IRedWinePageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>Red wines under construction</div>;
  }
}
