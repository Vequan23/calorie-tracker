export const UISelectors = {
  itemList: ".item-list",
  addBtn: ".add-btn",
  mealInput: ".calorie-form__meal-input",
  calorieInput: ".calorie-form__calorie-input"
};

export const UIPopulateItemList = data => {
  let html = "";
  data.items.forEach(item => {
    html += `<li>
        <strong>${item.name}</strong><em> ${item.calories} Calories </em>
      </li>`;
  });

  document.querySelector(UISelectors.itemList).innerHTML = html;
};
export const getItemInput = () => {
  return {
    name: document.querySelector(UISelectors.mealInput).value,
    calories: document.querySelector(UISelectors.calorieInput).value
  };
};
