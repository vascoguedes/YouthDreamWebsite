import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  
  return (
    <li className='cards__item'>
      <Link className='cards__item__link' to={props.path}>
        <div className={'cards__item__question__box' + (props.id % 3)}>
          <h5 className='cards__item__question__text'>{props.question}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
