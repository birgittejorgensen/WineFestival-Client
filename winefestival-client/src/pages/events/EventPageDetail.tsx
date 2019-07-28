import * as React from 'react';
import WineCard from '../../components/wineCard/WineCard';
import './EventPageDetail.scss';

export interface IEventPageDetailProps {}

export interface IEventPageDetailState {}

export default class EventPageDetail extends React.Component<
  IEventPageDetailProps,
  IEventPageDetailState
> {
  constructor(props: IEventPageDetailProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className='EventPageDetail'>
        <WineCard></WineCard>
        <WineCard></WineCard>
        <WineCard></WineCard>
        <WineCard></WineCard>
        <WineCard></WineCard>
      </div>
    );
  }
}
