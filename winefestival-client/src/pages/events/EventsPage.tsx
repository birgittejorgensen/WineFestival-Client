import * as React from 'react';
import EventReviewCard from '../../components/eventCard/EventCard';

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
      <div>
        <EventReviewCard></EventReviewCard>
        <EventReviewCard></EventReviewCard>
        <EventReviewCard></EventReviewCard>
        <EventReviewCard></EventReviewCard>
      </div>
    );
  }
}
