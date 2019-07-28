import * as React from 'react';
import PreviousWineCard from '../../components/PreviousWineCard';

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
    return (
      <div>
        <PreviousWineCard></PreviousWineCard>
        <PreviousWineCard></PreviousWineCard>
        <PreviousWineCard></PreviousWineCard>
      </div>
    );
  }
}
