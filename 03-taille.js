const years = document.getElementsByClassName("frise-annee");
const taille = document.getElementById("popup-taille");
const popup = document.getElementById("frise-popup");
const body = document.getElementById("body");
const main = document.getElementsByClassName("main")[0];
const fermer = document.getElementById("bouton-fermer");
popup.hidden = true;

for (let i = 0; i < 3; i++) {
  years[i].addEventListener("click", (e) => {
    popup.hidden = false;
    console.log(e);
    const dateValue = e.target.innerText;
    switch (dateValue) {
      case "2010":
        taille.innerText = "500 Ko";
        break;
      case "2015":
        taille.innerText = "1,9 Mo";
        break;
      case "2020":
        taille.innerText = "2,5 Mo";
        break;

      default:
        break;
    }
    main.style.backgroundColor = "grey";
    body.style.backgroundColor = "grey";
  });
}

fermer.addEventListener("click", () => {
  popup.hidden = true;
  main.style.backgroundColor = "ghostwhite";
  body.style.backgroundColor = "ghostwhite";
});
