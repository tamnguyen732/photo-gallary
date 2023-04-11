import renderInfinite from "../renderComponents/renderInfiniteScroll";
import createSortBy from "./createSortBy";

const filterContainer = document.querySelector(".filter");
const cardList = document.querySelector(".card-list");
const topics = [
  "Wallpapers",
  "Travel",
  "Nature",
  "Street Photography",
  "Film",
  "3D-Renders",
];
export default function createFilterButtons() {
  const { getValue } = createSortBy();
  cardList.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("wrapper-btn");
  const buttons = topics.map((topic) => {
    const button = document.createElement("button");

    button.classList.add("filter-button");
    button.value = topic;
    button.textContent = topic;
    return button;
  });
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => handleRenderTopic(button, index));
    div.appendChild(button);
  });
  filterContainer.appendChild(div);
  function handleActiveBtn(_, idx) {
    buttons.forEach((button) => button.classList.remove("active"));
    buttons[idx].classList.add("active");
  }
  function handleRenderTopic(button, idx) {
    let value;
    handleActiveBtn(button, idx);

    value = button.getAttribute("value").toLowerCase();

    if (value.includes(" ")) {
      value = value.replace(/\s+/g, "-");
    }
    if (value) {
      getValue({ value });
      renderInfinite({ value });
    }
  }
}
