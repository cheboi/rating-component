const submit = document.querySelector(".submit"),
  rate = document.querySelectorAll(".rate"),
  selected = document.querySelector(".selected");

const displayEnd = document.querySelector(".wrapper__state-end"),
  displyStart = document.querySelector(".wrapper__state-start");

rate.forEach((rateBtns) => {
  rateBtns.addEventListener("click", () => {
    submit.addEventListener("click", () => {
      displayEnd.style.display = "block";
      displyStart.style.display = "none";
      selected.textContent = rateBtns.textContent;
    });
  });
});
