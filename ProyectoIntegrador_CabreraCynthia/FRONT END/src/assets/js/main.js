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
    const filterContainer = document.querySelector(".portfolio-filter"), porfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    cerrarBtn = popup.querySelector(".pp-cerrar"),
    detallesProyectoContainer = popup.querySelector(".pp-detalles"),
    detallesProyectoBtn = popup.querySelector(".pp-detalles-proyecto-btn");
    let itemIndex, slideIndex, screenshots;

    filterContainer.addEventListener("click", (event)=>{
      if(event.target.classList.contains("filter-item") &&
       !event.target.classList.contains("active")){
       filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
       event.target.classList.add("active", "outer-shadow");
       const target = event.target.getAttribute("data-target");
       portfolioItems.forEach((item) =>{
        if(target === item.getAttribute("data-category") || target === 'all'){
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

    porfolioItemsContainer.addEventListener("click", (event) =>{
      if(event.target.closest(".portfolio-item-inner")){
       const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
       itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
       screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
       screenshots = screenshots.split(",");
       slideIndex = 0;
       popupToggle();
       popupSlideshow();
      }

    })

    closeBtn.addEventListener("click", () =>{
      popupToggle();
    })

    function popupToggle() {
      popup.classList.toggle("open");
      bodyScrollingToggle();
    }

    function popupSlideshow() {
      const imgSrc = screenshots[slideIndex];
      const popupImg = popup.querySelector(".pp-img");
      popup.querySelector(".pp-loader").classList.add("active");
      popupImg.src = imgSrc;
      popupImg.onload = () =>{
        popup.querySelector("pp-loader").classList.remove("active");
      }
      popup.querySelector("pp-counter").innerHTML = (slideIndex+1) + " of " + screenshots.length;
    }

})();
