import { UIPopulateItemList } from "./ui.js";
import { getData } from "./item.js";

const App = (function() {
  return {
    init: () => {
      let data = getData();
      UIPopulateItemList(data);
    }
  };
})();

App.init();
