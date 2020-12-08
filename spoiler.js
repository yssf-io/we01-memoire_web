const blogs = document.getElementsByClassName("blog");
const spoilers = document.getElementsByClassName("spoiler");

for (let i = 0; i < blogs.length; i++) {
  blogs[i].addEventListener("click", (e) => {
    if (spoilers[i].style.display === "block") {
      spoilers[i].style.display = "none";
    } else {
      spoilers[i].style.display = "block";
    }
  });
}
