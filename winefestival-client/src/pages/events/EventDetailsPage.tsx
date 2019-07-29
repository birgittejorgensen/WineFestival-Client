import * as React from 'react';
import WineCard from '../../components/wineCard/WineCard';
import './EventDetailsPage.scss';

export interface IEventDetailsPageProps {}

export interface IEventDetailsPageState {}

export default class EventDetailsPage extends React.Component<
  IEventDetailsPageProps,
  IEventDetailsPageState
> {
  constructor(props: IEventDetailsPageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className="EventDetailsPage">
        <WineCard className="EventDetailsPage__WineCard"></WineCard>
        <WineCard className="EventDetailsPage__WineCard"></WineCard>
        <WineCard className="EventDetailsPage__WineCard"></WineCard>
        <WineCard className="EventDetailsPage__WineCard"></WineCard>
        <WineCard className="EventDetailsPage__WineCard"></WineCard>
      </div>
    );
  }
}
