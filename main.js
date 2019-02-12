const card = document.getElementsByClassName("card");
//For each card
for (var i = 0; i < card.length; i++) {
  let test = card[i];
  test.addEventListener("click", function() {
    test.classList.toggle("flipped");
  });
}
