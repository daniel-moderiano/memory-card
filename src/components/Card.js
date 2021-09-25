
export const Card = (props) => {
  return (
    <div className="card" onClick={() => {props.handleClick(props.name)}}>
      <div className="card__container">
        <img src={props.src} alt={props.name} className="card__img" />
      </div>
      <h2 className="card__title">{props.name.toUpperCase()}</h2>
    </div>
  );
}
