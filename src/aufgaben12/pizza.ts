
enum PizzaSize {
    Small,
    Medium,
    Large,
    Familie
}

enum PizzaIngredients {
    Cheese, 
    Onion, 
    Salami
}

type Pizza = { PizzaSize: PizzaSize; PizzaIngredients: PizzaIngredients[]}

const erstePizza: Pizza = {
    PizzaSize: PizzaSize.Familie,
    PizzaIngredients: [PizzaIngredients.Cheese]
}
const zweitePizza: Pizza = {
    PizzaSize: PizzaSize.Medium,
    PizzaIngredients: [PizzaIngredients.Onion]
}
const drittePizza: Pizza = {
    PizzaSize: PizzaSize.Small,
    PizzaIngredients: [PizzaIngredients.Salami]
}

console.log(erstePizza);
console.log(zweitePizza);
console.log(drittePizza);