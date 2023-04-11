import renderSearchImage from "./renderComponents/renderSearchImages";
import renderFilterTopic from "./renderComponents/renderFilterTopic";
import renderInfinite from "./renderComponents/renderInfiniteScroll";

async function init() {
  renderSearchImage();
  renderFilterTopic();
  renderInfinite({});
}

init();
