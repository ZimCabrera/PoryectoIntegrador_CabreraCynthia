(() =>{
    const sobreMi = document.querySelector(".sobremi"),
    tabsContainer = document.querySelector(".acerca-tabs");

     tabsContainer.addEventListener("click", (event) =>{
      if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
        const target = event.target.getAttribute("data-target");
        tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
        event.target.classList.add("active", "outer-shadow");
        sobreMi.querySelector(".tab-content.active").classList.remove("active");
        sobreMi.querySelector(target).classList.add("active");
      }
    })

})();

 function bodyScrollingToggle() {
  document.body.classList.toggle("stop-scrolling");
 }


                                  /* Popup */
(() =>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    cerrarBtn = popup.querySelector(".pp-cerrar"),
    detallesProyectoContainer = popup.querySelector(".pp-detalles"),
    detallesProyectoBtn = popup.querySelector(".pp-detalles-proyecto-btn");
    let itemIndex, slideIndex, screenshots;

    filterContainer.addEventListener("click", (event) =>{
      if(event.target.classList.contains("filter-item") &&
       !event.target.classList.contains("active")){
       
        filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
        event.target.classList.add("active", "outer-shadow");
        const target = event.target.getAttribute("data-target");
        portfolioItems.forEach((item) =>{
         if(target === item.getAttribute("data-category")){
          item.classList.remove("hide");
          item.classList.add("show");
        }
        else{
          item.classList.remove("show");
          item.classList.add("hide");
        }
       })
      }
    })

    portfolioItemsContainer.addEventListener("click", (event) =>{
      if(event.target.closest(".portfolio-item-inner")){
       const portfolioItems = event.target.closest(".portfolio-item-inner").parentElement;
       itemIndex = Array.from(portfolioItems.parentElement.children).indexOf(portfolioItems);
       screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
       screenshots = screenshots.split(",");
       if(screenshots.length === 1){
        prevBtn.style.display="none";
        nextBtn.style.display="none";
       }
       else{
        prevBtn.style.display="block";
        nextBtn.style.display="block";
       }
       slideIndex = 0;
       popupToggle();
       popupSlideshow();
       popupDetalles();
      }

    })

    cerrarBtn.addEventListener("click", () =>{
      popupToggle();
      if(detallesProyectoContainer.classList.contains("active")){
        popupDetallesToggle();
      }
    })

    function popupToggle() {
      popup.classList.toggle("open");
      bodyScrollingToggle();
    }

    function popupSlideshow() {
      const imgSrc = screenshots[slideIndex];
      const popupImg = popup.querySelector(".pp-img");
      popup.querySelector(".pp-loader").classList.add("active");
      popupImg.src=imgSrc;
      popupImg.onload = () =>{
        popup.querySelector(".pp-loader").classList.remove("active");
      }
      popup.querySelector(".pp-counter").innerHTML = (slideIndex+1) + " of " + screenshots.length;
    }

    nextBtn.addEventListener("click", () =>{
      if(slideIndex === screenshots.length-1){
        slideIndex = 0;
      }
      else{
        slideIndex++;
      }
      popupSlideshow();
      console.log("slideIndex:" + slideIndex);
    })

    prevBtn.addEventListener("click", () =>{
      if(slideIndex === 0){
        slideIndex = screenshots.length-1;
      }
      else{
        slideIndex--;
      }
      popupSlideshow();
      console.log("slideIndex:" + slideIndex);
    })

    function popupDetalles() {
      if(!portfolioItems[itemIndex].querySelector(".portfolio-item-detalles")){
        detallesProyectoBtn.style.display="none";
        return /*  */
      }
      detallesProyectoBtn.style.display="block";

      const detalles = portfolioItems[itemIndex].querySelector(".portfolio-item-detalles").innerHTML;
      popup.querySelector(".pp-project-detalles").innerHTML = detalles;
      
      const titulo = portfolioItems[itemIndex].querySelector(".portfolio-item-titulo").innerHTML;
      popup.querySelector(".pp-titulo h3").innerHTML = titulo;

      const category = portfolioItems[itemIndex].getAttribute("data-category");
      popup.querySelector(".pp-project-category").innerHTML = category.split("-").join(" ");
    }
     
     
    detallesProyectoBtn.addEventListener("click", () =>{
      popupDetallesToggle();
    })

    function popupDetallesToggle() {
      if(detallesProyectoContainer.classList.contains("active")){
        detallesProyectoBtn.querySelector("i").classList.remove("fa-circle-minus");
        detallesProyectoBtn.querySelector("i").classList.add("fa-circle-plus");
        detallesProyectoContainer.classList.remove("active");
        detallesProyectoContainer.style.maxHeight = 0 + "px";
      }
      else{
        detallesProyectoBtn.querySelector("i").classList.remove("fa-circle-plus");
        detallesProyectoBtn.querySelector("i").classList.add("fa-circle-minus");
        detallesProyectoContainer.classList.add("active");
        detallesProyectoContainer.style.maxHeight = detallesProyectoContainer.scrollHeight + "px";
        popup.scrollTo(0,detallesProyectoContainer.offsetTop);
      }
    }
})();
