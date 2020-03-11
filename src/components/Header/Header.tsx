import React from 'react';
import './Header.scss';

type HeaderProps = {
  headerInfo: {
    title: string
    count: number
  }
}

const Header: React.FC<HeaderProps> = (props) => {

  return (
    <div className="header">
      {
        Object.keys(props.headerInfo).length !== 0 && ( 
          <div className="header__wrapper">
            <div className="header__titleNetwork">{props.headerInfo.title}</div>
            <div className="header__countNetwork">{props.headerInfo.count} станций</div>
          </div>
          )
        }
    </div>
  )
}

export default Header;
