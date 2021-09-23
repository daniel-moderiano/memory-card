
export const Card = (props) => {

  return (
    <div className="card" onClick={() => {props.handleClick(props.name)}}>
      <div className="card__container">
        <img src="" alt="" className="card__img" />
      </div>
      <h2 className="card__title">{props.name.toUpperCase()}</h2>
    </div>
  );
}
