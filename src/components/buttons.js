import React from 'react';

export const ButtonNext = ({ nextClick, extraClass, text }) => (
    <a onClick={nextClick} 
       className={["button button-next", extraClass].join(' ')}>
      <span>{text}</span>
      <span className="fa fa-chevron-right" />
    </a>
)

export const ButtonBack = ({ cancelClick }) => (
    <a className={"button " +
                  "button-back " +
                  "button-shared-back"} 
       onClick={cancelClick}>
      <span className="fa fa-chevron-left"></span>
      <span>Back</span>
    </a>
)