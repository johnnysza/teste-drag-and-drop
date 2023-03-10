const draggable = document.querySelectorAll(".item");
const droppable = document.querySelector(".dropbox");

draggable.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.classList.add("dragging");
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});

droppable.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();

    const curItem = document.querySelector(".is-dragging");

    zone.appendChild(curItem);
  });
});

const insertAboveItem = (zone, mouseY) => {
  const els = zone.querySelectorAll(".item:not(.is-dragging)");

  let closestItem = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((item) => {
    const { top } = item.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestItem = task;
    }
  });

  return closestItem;
};
