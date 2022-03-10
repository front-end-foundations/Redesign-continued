function clickHandlers(event) {
  if (event.target.matches("#pull")) {
    showMenu(event);
    event.preventDefault();
  }
  if (event.target.matches(".content-video a")) {
    videoSwitch(event);
    event.preventDefault();
  }
  if (event.target.matches(".image-tn img")) {
    runCarousel(event);
    event.preventDefault();
  }
}

function runCarousel(event) {
  const imageHref = event.target.parentNode.getAttribute("href");
  const titleText = event.target.title;
  document.querySelector("figure img").setAttribute("src", imageHref);
  // document.querySelector("figure img").src = imageHref;
  document.querySelector("figcaption").innerHTML = titleText;
}

function showMenu() {
  document.querySelector("body").classList.toggle("show-nav");
}

function videoSwitch(event) {
  const iFrame = document.querySelector("iframe");
  const videoLinks = document.querySelectorAll(".content-video a");
  videoLinks.forEach((videoLink) => videoLink.classList.remove("active"));
  event.target.classList.add("active");
  const videoToPlay = event.target.getAttribute("href");
  iFrame.setAttribute("src", videoToPlay);
}

export default clickHandlers;
