import * as React from 'react';

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
    return <div>Hello world!</div>;
  }
}
