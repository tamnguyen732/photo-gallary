import unslashClient from "../api/unslashClient";
import errorHandler from "../functions/errorHandler";
import renderImages from "./renderImages";
import renderLoading from "./renderLoading";
const input = document.querySelector(".input");
const pageContainer = document.querySelector(".pages");
const cardList = document.querySelector(".card-list");
export default function renderPages(totalPage = 10, type) {
  const pagesNumber = Array.from({ length: totalPage }, (_, i) => i + 1);

  const handleChangePage = (page, idx) => {
    handleRenderPages(page, input.value, type);

    buttons.forEach((button) => button.classList.remove("active"));

    buttons[idx].classList.add("active");
  };

  const buttons = pagesNumber.map((page, index) => {
    const button = document.createElement("button");
    button.textContent = page;
    button.classList.add("page");
    button.addEventListener("click", () => handleChangePage(page, index));

    return button;
  });
  pageContainer.innerHTML = "";
  buttons.forEach((button) => {
    pageContainer.appendChild(button);
    buttons[0].classList.add("active");
  });
}

async function handleRenderPages(pageNum, query, type) {
  renderLoading(cardList, "show");
  let response;
  if (!query) {
    response = await errorHandler(
      async () => {
        return unslashClient.getPhotos({
          page: pageNum,
          per_page: 8,
          order_by: type,
        });
      },
      (error) => console.log(error)
    );
  } else {
    const res = await errorHandler(
      async () => {
        return unslashClient.searchPhotos({
          page: pageNum,
          per_page: 8,
          query,
        });
      },
      (error) => console.log(error)
    );
    response = res.results;
  }

  setTimeout(() => {
    cardList.innerHTML = "";
    renderImages(response);
    renderLoading(cardList, "hidden");
  }, 500);
}
