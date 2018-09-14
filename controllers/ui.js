const UISelectors = {
  itemList: ".item-list"
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
