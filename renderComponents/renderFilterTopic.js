import createFilterButtons from "../functions/createFilterButtons";
import createSortBy from "../functions/createSortBy";

export default function renderFilterTopic() {
  const { createSort, getValue } = createSortBy();

  createFilterButtons();
  createSort();
  getValue({});
}
