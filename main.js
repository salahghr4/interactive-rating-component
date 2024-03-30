const btnSubmit = document.querySelector(".btn-submit");
const btnratings = document.querySelectorAll(".btn-rating");
const ratingWrapper = document.querySelector(".rating-wrapper");
const thanksWrapper = document.querySelector(".thank-you-wrapper");
const ratingResult = document.querySelector(".ratingResult");

btnratings.forEach((e) => {
  e.addEventListener("click", () => {
    //removing the previously selected rating on a new click
    btnratings.forEach((e) => {
      e.classList.remove("selected");
    });
    e.classList.toggle("selected");
  });
});

btnSubmit.addEventListener("click", () => {
  const rating = document.querySelector(".selected");
  if (rating == null) {
    alert("Please select a rating value !");
  } else {
    ratingWrapper.classList.add("display");
    ratingResult.textContent = `You selected ${rating.textContent} out of 5`;
    thanksWrapper.classList.remove("display");
  }
});