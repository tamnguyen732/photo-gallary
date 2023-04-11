import renderModal from "./renderModal";

const cardList = document.querySelector(".card-list");
const { openModal } = renderModal();
export default function renderImages(images) {
  images?.map(({ urls, links }) => {
    return (cardList.innerHTML += `
    <img class="card" src="${urls?.regular}" data-link = "${links.html}"/>
    `);
  });
  cardList.addEventListener("click", handleCardClick);
}

function handleCardClick(event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains("card")) {
    const src = clickedElement.getAttribute("src");
    const link = clickedElement.getAttribute("data-link");

    openModal(src, link);
  }
}
