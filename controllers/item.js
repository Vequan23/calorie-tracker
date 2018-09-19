export const getData = () => {
  const data = {
    items: [
      { id: 0, name: "Steak", calories: 1200 },
      { id: 1, name: "Burger", calories: 900 },
      { id: 2, name: "Burrito", calories: 700 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  return data;
};

export const itemAddSubmit = e => {
  console.log("add");
  e.preventDefault();
};
