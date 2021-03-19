import './logo.svg';

const Ingredients = (props) => (
  <section>
    <h2>Ingredients</h2>
    <ul>
      {props.ingredients.map(ingredient => <li>{ingredient}</li>)}
    </ul>
  </section>
)

export default Ingredients