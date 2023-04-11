const loadingContainer = document.querySelector(".loading");
export default function renderLoading(target, condition) {
  loadingContainer.style.display = condition === "show" ? "block" : "none";

  target.style.display = condition === "show" ? "none" : "grid";
}
