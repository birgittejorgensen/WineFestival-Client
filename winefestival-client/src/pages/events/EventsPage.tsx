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
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
      </div>
    );
  }
}
