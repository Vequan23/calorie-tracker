import { getItemInput } from "./ui.js";

export const getData = () => {
  const data = {
    items: [{ id: 0, name: "Steak", calories: 1200 }, { id: 1, name: "Burger", calories: 900 }, { id: 2, name: "Burrito", calories: 700 }],
    currentItem: null,
    totalCalories: 0
  };

  return data;
};

export const itemAddSubmit = e => {
  e.preventDefault();
  const input = getItemInput();

  if (input.name !== "" && input.calories !== "") {
    const newItem = addItem(input.name, input.calories);
  }
};

const addItem = (name, calories) => {
  let id;
  let data = getData();
  if (data.items.length > 0) {
    id = data.items[data.items.length - 1].id + 1;
  } else {
    id = 0;
  }

  const calories = parseInt(calores);
};
