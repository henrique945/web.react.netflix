import React, { ReactElement } from 'react';
import netflix from '../../assets/imgs/netflix.png';
import './header.css';
import { HeaderInterface } from './header.interface';

export default ({ black }: HeaderInterface): ReactElement => {
  return (
    <header className={ black ? 'black' : '' }>
      <div className="header--logo">
        <a href="/">
          <img src={ netflix } alt="Netflix"/>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário"/>
        </a>
      </div>
    </header>
  );
}
