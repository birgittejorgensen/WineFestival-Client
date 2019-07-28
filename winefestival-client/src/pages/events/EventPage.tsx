import * as React from 'react';
import WineCard from '../../components/WineCard';

export interface IEventPageProps {}

export interface IEventPageState {}

export default class EventPage extends React.Component<
  IEventPageProps,
  IEventPageState
> {
  constructor(props: IEventPageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <WineCard></WineCard>
        <WineCard></WineCard>
        <WineCard></WineCard>
        <WineCard></WineCard>
        <WineCard></WineCard>
      </div>
    );
  }
}
