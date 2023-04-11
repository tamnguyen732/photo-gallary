const modal = document.querySelector(".modal");
const content = document.querySelector(".content");
function clearModalContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

export default function renderModal() {
  function openModal(src, link) {
    clearModalContent();
    const image = document.createElement("img");

    const icon = document.createElement("i");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", `${link}`);
    anchor.classList.add("go-to");
    anchor.setAttribute("target", "_blank");
    anchor.appendChild(icon);

    icon.classList.add("fa-solid", "fa-arrow-up-right-from-square", "link");
    image.classList.add("modal-image");
    image.src = src;
    modal.classList.add("zoomIn");
    modal.style.display = "block";

    icon.addEventListener("mouseenter", () => {
      const span = document.createElement("span");
      span.classList.add("tooltip");
      span.textContent = "Go to the original photo";
      content.appendChild(span);
    });

    icon.addEventListener("mouseleave", () => {
      const tooltip = content.querySelector(":scope .tooltip");

      if (tooltip) {
        content.removeChild(tooltip);
      }
    });
    content.append(image, anchor);
    window.onclick = function (event) {
      if (event.target == modal) {
        closeModal();
      }
    };
  }

  function closeModal() {
    modal.style.display = "none";
    clearModalContent();
  }

  return { openModal, closeModal };
}
