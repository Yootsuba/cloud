
document.addEventListener("scroll", function () {
    const header = document.getElementById("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}); 
 window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}
);


  (function () {
    const header = document.getElementById("header");
    const threshold = 50; // عدد البيكسلات التي بعد نزولها يُفعل التأثير — عدّل إن أردت

    window.addEventListener("scroll", function () {
      if (window.scrollY > threshold) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }, {passive: true});
  })();

