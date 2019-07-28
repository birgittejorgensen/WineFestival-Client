import * as React from 'react';

export interface ILoginHelpPageProps {}

export interface ILoginHelpPageState {}

export default class LoginHelpPage extends React.Component<
  ILoginHelpPageProps,
  ILoginHelpPageState
> {
  constructor(props: ILoginHelpPageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>Contact: bijo@itu.dk</div>;
  }
}
