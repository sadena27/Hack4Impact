import './logo.svg';
import './index.css';
import Ingredients from './ingredients'
import Directions from './directions'

const ingredientList = ['1 cup whole wheat flour', '1/4 cup wheat germ', '1/3 cup white sugar', '1 teaspoon ground cinnamon',
                        '1 teaspoon pumpkin pie spice', '1/2 teaspoon ground nutmeg', '1/2 teaspoon salt', '1 tablespoon baking powder',
                        '3/4 cup milk', '1/2 cup pumpkin puree', '2 tablespoons melted butter', '2 tablespoons olive oil',
                        '1/2 cup unsweetened applesauce', '1 egg', '1 eggwhite', '1/2 cup chopped pecans']

const directionList = ["Preheat a waffle iron according to manufacturer's instructions. Combine flour, wheat germ, sugar, cinnamon, pumpkin pie spice, nutmeg, salt, and baking powder in a bowl. Set aside.",
                       "Beat together milk, pumpkin puree, butter, oil, applesauce, whole egg, and egg white. Stir flour mixture into the pumpkin mixture along with the pecans.",
                       "Ladle the batter onto the preheated waffle iron. Cook the waffles until golden and crisp, 5 to 7 minutes."]

const statList = ['Prep: 10 mins', 'Cook: 40 mins', 'Total: 50 mins', 'Servings: 4', 'Yield: 8 waffles']

const nutritionFactList = ["471 calories", "protein 11.5g", "carbohydrates 53.9g", "fat 26g", "cholesterol 65.4mg", "sodium 710.7mg"]

const App = () => (
  <main>
    <h1>Cinnamon Pumpkin Waffles Recipe</h1>
    <ul class="no-bullets">
      {statList.map(stat => <li>{stat}</li>)}
    </ul>
    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F499387.jpg&w=596&h=399&c=sc&poi=face&q=85" alt="Cinammon Pumpkin Waffles"/>
    <Ingredients ingredients={ingredientList} />
    <Directions directions={directionList} />
    <h2>Nutrition Facts (Per Serving)</h2>
    <ul>
      {nutritionFactList.map(nutritionFact => <li>{nutritionFact}</li>)}
    </ul>
  </main>
)

export default App;