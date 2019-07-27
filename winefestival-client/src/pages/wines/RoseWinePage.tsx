import * as React from 'react';

export interface IRoseWinePageProps {}

export interface IRoseWinePageState {}

export default class RoseWinePage extends React.Component<
  IRoseWinePageProps,
  IRoseWinePageState
> {
  constructor(props: IRoseWinePageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>Rose wines under construction</div>;
  }
}
