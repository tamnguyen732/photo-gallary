import unslashClient from "../api/unslashClient";
import renderImages from "./renderImages";

const endCard = document.querySelector(".end-card");
const cardList = document.querySelector(".card-list");
export default async function renderInfinite({
  query,
  value,
  sort = "feature",
}) {
  const options = {
    rootMargin: "10px",
    threshold: 1.0,
  };

  cardList.innerHTML = "";
  let page = 1;
  let isLoading = false;
  let hasMore = true;

  if (window.observer) {
    window.observer.disconnect();
  }
  window.observer = new IntersectionObserver(async (entries) => {
    if (!isLoading && hasMore && entries[0].isIntersecting) {
      isLoading = true;
      console.log(entries[0].isIntersecting);
      try {
        let response;
        if (value) {
          response = await unslashClient.getTopics(
            { page, per_page: 8, order_by: sort },
            value
          );
        } else if (query && query !== "") {
          const res = await unslashClient.searchPhotos({
            page,
            per_page: 8,
            order_by: sort,
            query,
          });
          response = res.results;
        } else {
          response = await unslashClient.getPhotos({
            page,
            per_page: 8,
            order_by: sort,
          });
        }

        renderImages(response);
        page++;
        isLoading = false;
      } catch (error) {
        console.log(error);
        isLoading = false;
      }
    }
  }, options);

  window.observer.observe(endCard);
}
