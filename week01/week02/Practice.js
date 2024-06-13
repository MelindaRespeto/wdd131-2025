// with .forEach
const foodsElement = document.querySelector('#favorite-foods');
function createandAppendFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  foodsElement.appendChild(favoriteFood);
}
{
myInfo.favoriteFoods.forEach(createAndAppendFoodItem);
}

// with .map
  const foodsElement = document.querySelector('#favorite-foods');
  function mapFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    return favoriteFood;
  }
  // this function could also be written this way using a template literal:
  function mapFoodItemSmall(food) {
    return `<li>${food}</li>`;
  }
  const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
  // we need to flatten the array of strings into one big string. .join does this.
  foodsElement.innerHTML = foodListElements.join('');