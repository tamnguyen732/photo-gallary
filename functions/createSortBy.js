import renderInfinite from "../renderComponents/renderInfiniteScroll";

const filterContainer = document.querySelector(".filter");
const sortBy = ["Feature", "Latest", "Oldest"];
const cardList = document.querySelector(".card-list");
export default function createSortBy() {
  function createSort() {
    const div = document.createElement("div");
    div.classList.add("sort-by");
    const label = document.createElement("label");
    label.textContent = "Sort by:";
    label.setAttribute("for", "dropdown");
    const select = document.createElement("select");
    select.id = "dropdown";
    select.setAttribute("name", "dropdown");
    div.append(label, select);
    sortBy.map((item) => {
      return (select.innerHTML += `<option class="sort-by" value=${item.toLocaleLowerCase()}>${item}</option>`);
    });
    filterContainer.append(div);
  }

  function getValue({ query, value }) {
    const select = filterContainer.querySelector("#dropdown");
    select.addEventListener("change", async (e) => {
      cardList.innerHTML = "";
      const sort = e.target.value;

      console.log(sort);
      if (query) {
        renderInfinite({ query, sort });
      } else if (value) {
        renderInfinite({ value, sort });
      } else {
        renderInfinite({ sort });
      }
    });
  }

  return {
    createSort,
    getValue,
  };
}
