import './logo.svg';

const Directions = (props) => (
  <section>
    <h2>Directions</h2>
    <ol>
      {props.directions.map(direction => <li>{direction}</li>)}
    </ol>
  </section>
)

export default Directions