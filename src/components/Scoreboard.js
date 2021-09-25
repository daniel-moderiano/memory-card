
export const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <div className="scoreboard__best">Best score: {props.best}</div>
      <div className="scoreboard__current">Current score: {props.current}</div>
    </div>
  )
}
