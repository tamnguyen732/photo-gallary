import createSortBy from "../functions/createSortBy";
import renderInfinite from "./renderInfiniteScroll";

const searchButton = document.querySelector(".search");
const input = document.querySelector(".input");
const cardList = document.querySelector(".card-list");
function renderSearchImage() {
  const { getValue } = createSortBy();
  let query = "";
  input.addEventListener("change", (e) => {
    query = e.target.value;
    input.value = e.target.value;
  });

  searchButton.addEventListener("click", async () => {
    if (!query) {
      return;
    }
    cardList.innerHTML = "";
    renderInfinite({ query });
    getValue({ query });
  });
}

export default renderSearchImage;
