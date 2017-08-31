import React from 'react';

const ButtonNext = ({ nextClick, extraClass, text }) => (
    <a onClick={nextClick} 
       className="button button-next button-large button-pickquestions">
      {text}<span className="fa fa-chevron-right" />
    </a>
)

const ButtonCancel = (cancelClick) => (
    <a className="button button-back button-shared-back" onClick={backToScheduleTime}>Back</a>
) 