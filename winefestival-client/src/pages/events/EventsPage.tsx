import * as React from 'react';
import EventCard from '../../components/eventCard/EventCard';
import './EventsPage.scss';

export interface IEventsPageProps {}

export interface IEventsPageState {}

export default class EventsPage extends React.Component<
  IEventsPageProps,
  IEventsPageState
> {
  constructor(props: IEventsPageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className="EventPage">
        <EventCard className="EventPage__EventCard"></EventCard>
        <EventCard className="EventPage__EventCard"></EventCard>
        <EventCard className="EventPage__EventCard"></EventCard>
        <EventCard className="EventPage__EventCard"></EventCard>
      </div>
    );
  }
}
