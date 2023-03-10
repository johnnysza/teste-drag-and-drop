const draggable = document.querySelectorAll(".item");
const droppable = document.querySelectorAll(".dropbox");

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

    const curTask = document.querySelector(".is-dragging");

    zone.appendChild(curTask);
  });
});
