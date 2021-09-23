import React from 'react';

export const Card = (props) => {
  return (
    <div className="card">
      <div className="card__container">
        <img src="" alt="" className="card__img" />
      </div>
      <h2 className="card__title">{props.char}</h2>
    </div>
  );
}
