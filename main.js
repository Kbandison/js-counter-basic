let counter = document.querySelector(".counter");
let subtract = document.querySelector(".subtract");
let add = document.querySelector(".add");

let count = 0;

const updateCounter = () => {
  counter.innerHTML = count;
};

updateCounter();

subtract.addEventListener("click", () => {
  if (count >= 1) {
    count--;
    updateCounter();
  }
});

add.addEventListener("click", () => {
  count++;
  updateCounter();
});
