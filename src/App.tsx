import React from 'react';
import cn from 'classnames';
import '@/assets/scss/app.scss';

export class App extends React.Component {
  render(): JSX.Element {
    let {} = this.props;
    return (
      <div className={cn('app')} style={{ fontSize: '40px' }}>
        111111111111111111
      </div>
    );
  }
}
