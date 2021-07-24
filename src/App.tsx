import React from 'react';
import cn from 'classnames';
import css from '@/assets/scss/app.module.scss';

export class App extends React.Component {
  render(): JSX.Element {
    let {} = this.props;
    return (
      <div className={cn(css.app)} style={{ fontSize: '40px' }}>
        111111111111111111
      </div>
    );
  }
}
