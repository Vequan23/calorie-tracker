import { UIPopulateItemList, UISelectors } from "./ui.js";
import { getData, itemAddSubmit } from "./item.js";

const App = (function() {
  const loadEventListeners = function() {
    document.querySelector(UISelectors.addBtn).addEventListener("click", itemAddSubmit);
  };

  return {
    init: () => {
      let data = getData();
      UIPopulateItemList(data);
      loadEventListeners();
    }
  };
})();

App.init();
