import * as React from 'react';

export interface IAboutPageProps {}

export interface IAboutPageState {}

export default class AboutPage extends React.Component<
  IAboutPageProps,
  IAboutPageState
> {
  constructor(props: IAboutPageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <h1>Concept</h1>
        <p>
          The year was 2018, Monika and Birgitte, two students (especially
          financially speaking) wanted to go to the Copenhagen Rose Festival,
          however, that shit is expensive. So they decided that if they brought
          together a bunch of super awesome ladies they could do better. Not so
          long story short Poor Woman’s Rose Festival was born. The concept has
          now developed to involve more than the wonder that is rose.
        </p>
        <h1>In more detail:</h1>
        <p>
          Each participant paid a tiny fee and were paired with another
          participant. Together they found a wine within a reasonable price
          class and prepared a small presentation/lecture on the wine. Each wine
          was evaluated thoroughly by the participants. The winner went home
          with a super awesome price ofc. And everyone had fun and got slightly
          tipsy and lived happily till the end of summer (because then uni
          started). The concept will be the same. We will ask a tiny fee for
          food and snacks etc. basically to break even.
        </p>
      </div>
    );
  }
}
